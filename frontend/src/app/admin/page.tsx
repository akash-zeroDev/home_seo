'use client';
import { useEffect, useState } from 'react';

type Lead = {
  _id: string;
  parentName: string;
  phoneNumber: string;
  gradeLevel: string;
  subjects: string[];
  location: string;
  leadStatus: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://home-seo.onrender.com/api/leads')
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Admin Dashboard
        </h1>

        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-800/50 border-b border-gray-700">
                  <th className="p-5 font-semibold text-gray-300">Name</th>
                  <th className="p-5 font-semibold text-gray-300">Phone</th>
                  <th className="p-5 font-semibold text-gray-300">Grade</th>
                  <th className="p-5 font-semibold text-gray-300">Subjects</th>
                  <th className="p-5 font-semibold text-gray-300">Location</th>
                  <th className="p-5 font-semibold text-gray-300">Status</th>
                  <th className="p-5 font-semibold text-gray-300">Date</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-gray-500">Loading leads...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-gray-500">No leads found.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                      <td className="p-5 text-gray-200 font-medium">{lead.parentName}</td>
                      <td className="p-5 text-gray-400">{lead.phoneNumber}</td>
                      <td className="p-5 text-gray-300">{lead.gradeLevel}</td>
                      <td className="p-5 text-gray-400">
                        <div className="flex flex-wrap gap-1.5">
                          {lead.subjects.map(sub => (
                            <span key={sub} className="px-2.5 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 whitespace-nowrap">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-5 text-gray-400">{lead.location || '-'}</td>
                      <td className="p-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-medium border ${lead.leadStatus === 'Pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                            lead.leadStatus === 'Contacted' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                              lead.leadStatus === 'Converted' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                'bg-gray-500/10 text-gray-400 border-gray-500/20'
                          }`}>
                          {lead.leadStatus}
                        </span>
                      </td>
                      <td className="p-5 text-gray-500 text-sm">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
