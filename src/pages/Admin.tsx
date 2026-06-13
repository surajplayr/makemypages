import { useState, useEffect } from 'react';
import { FadeIn } from '../components/UI';
import { Inbox, Briefcase, LayoutDashboard, Plus, Trash2, ExternalLink } from 'lucide-react';

const Admin = () => {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [view, setView] = useState<'inquiries' | 'portfolio'>('inquiries');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [inqRes, portRes] = await Promise.all([
          fetch('/api/inquiries'),
          fetch('/api/portfolio')
        ]);
        const inqData = await inqRes.json();
        const portData = await portRes.json();
        setInquiries(inqData);
        setPortfolio(portData);
      } catch (error) {
        console.error('Failed to fetch admin data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-brand-text mb-2">Admin Dashboard</h1>
            <p className="text-brand-text-secondary">Manage your agency's content and leads.</p>
          </div>
          <div className="flex bg-white rounded-xl border border-brand-border p-1 shadow-soft">
            <button 
              onClick={() => setView('inquiries')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${view === 'inquiries' ? 'bg-brand-primary text-white shadow-md' : 'text-brand-text-secondary hover:text-brand-text'}`}
            >
              <Inbox size={18} />
              <span>Inquiries</span>
            </button>
            <button 
              onClick={() => setView('portfolio')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${view === 'portfolio' ? 'bg-brand-primary text-white shadow-md' : 'text-brand-text-secondary hover:text-brand-text'}`}
            >
              <Briefcase size={18} />
              <span>Portfolio</span>
            </button>
          </div>
        </FadeIn>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
          </div>
        ) : (
          <FadeIn>
            {view === 'inquiries' ? (
              <div className="bg-white rounded-[2rem] border border-brand-border overflow-hidden shadow-premium">
                <div className="p-8 border-b border-brand-border bg-brand-bg/50">
                   <h2 className="text-xl font-bold text-brand-text">Client Inquiries</h2>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-brand-border">
                          <th className="px-8 py-5 text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Date</th>
                          <th className="px-8 py-5 text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Name</th>
                          <th className="px-8 py-5 text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Service</th>
                          <th className="px-8 py-5 text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Message</th>
                          <th className="px-8 py-5 text-xs font-bold text-brand-text-secondary uppercase tracking-widest text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-border">
                        {inquiries.length === 0 ? (
                           <tr>
                              <td colSpan={5} className="px-8 py-10 text-center text-brand-text-secondary italic">No inquiries found.</td>
                           </tr>
                        ) : (
                          inquiries.map((inq) => (
                            <tr key={inq._id} className="hover:bg-brand-bg/30 transition-colors group">
                              <td className="px-8 py-6 text-sm text-brand-text-secondary">
                                {new Date(inq.createdAt).toLocaleDateString()}
                              </td>
                              <td className="px-8 py-6">
                                <div className="font-bold text-brand-text">{inq.name}</div>
                                <div className="text-sm text-brand-text-secondary">{inq.email}</div>
                              </td>
                              <td className="px-8 py-6">
                                <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                                  {inq.service || 'General'}
                                </span>
                              </td>
                              <td className="px-8 py-6 text-sm text-brand-text-secondary max-w-xs truncate">
                                {inq.message}
                              </td>
                              <td className="px-8 py-6 text-right">
                                <button className="text-brand-text-secondary hover:text-brand-primary transition-colors">
                                  <ExternalLink size={18} />
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                   </table>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                 <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-brand-text">Portfolio Items</h2>
                    <button className="bg-brand-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-2 hover:bg-brand-hover shadow-lg">
                       <Plus size={18} />
                       <span>Add Project</span>
                    </button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolio.map((item) => (
                       <div key={item._id} className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-premium group">
                          <div className="aspect-video relative">
                             <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                             <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white/90 backdrop-blur p-2 rounded-lg text-red-500 hover:bg-white shadow-sm">
                                   <Trash2 size={16} />
                                </button>
                             </div>
                          </div>
                          <div className="p-6">
                             <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">{item.category}</span>
                             <h4 className="font-bold text-brand-text mt-1">{item.title}</h4>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
            )}
          </FadeIn>
        )}
      </div>
    </div>
  );
};

export default Admin;
