import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PROPERTY_DATA } from '../constants';
import { AlertCircle, Table2, Banknote } from 'lucide-react';

const Financials: React.FC = () => {
  const data = [
    { name: 'Down Payment (Cash)', value: PROPERTY_DATA.price.downPayment, color: '#d97706' }, // amber-600
    { name: 'Remaining Installments', value: PROPERTY_DATA.price.remaining, color: '#334155' }, // slate-700
  ];

  const formatCurrency = (val: number) => {
    return val.toLocaleString('en-EG', { style: 'currency', currency: 'EGP', maximumFractionDigits: 0 });
  };

  return (
    <section id="financials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Summary Header */}
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 font-serif mb-4">Financial Breakdown</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Transparent pricing with a flexible payment plan extending until 2031.
            </p>
        </div>

        {/* Top Section: Overview & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Text Summary */}
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-lg text-slate-600 font-medium">Total Price</span>
                <span className="text-3xl font-bold text-slate-900">{formatCurrency(PROPERTY_DATA.price.total)}</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <div className="flex items-center text-slate-700">
                     <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                     Down Payment (To Owner)
                   </div>
                   <span className="font-bold text-slate-900">{formatCurrency(PROPERTY_DATA.price.downPayment)}</span>
                </div>
                
                 <div className="flex justify-between items-center">
                   <div className="flex items-center text-slate-700">
                     <span className="w-3 h-3 bg-slate-700 rounded-full mr-2"></span>
                     Remaining (Installments)
                   </div>
                   <span className="font-bold text-slate-900">{formatCurrency(PROPERTY_DATA.price.remaining)}</span>
                </div>
              </div>

               <div className="flex items-center text-slate-600 text-sm font-medium bg-slate-200/50 p-3 rounded-lg mt-6">
                  <AlertCircle className="w-4 h-4 mr-2 text-slate-500" />
                  Maintenance Fees Total: {formatCurrency(PROPERTY_DATA.price.maintenance)}
               </div>

            </div>
          </div>

          {/* Chart */}
          <div className="h-[400px] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center relative shadow-sm">
             <div className="absolute top-4 left-4 font-bold text-slate-400 text-sm uppercase">Investment Structure</div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <span className="block text-slate-400 text-xs uppercase tracking-wide">Total</span>
                <span className="block text-slate-900 font-bold text-xl">
                  {(PROPERTY_DATA.price.total / 1000000).toFixed(1)}M
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Schedule Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Installments Table */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center">
               <Table2 className="w-5 h-5 text-slate-500 mr-2" />
               <h3 className="font-bold text-slate-800">Future Installment Schedule</h3>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              <table className="w-full text-sm text-left text-slate-600">
                <thead className="text-xs text-slate-700 uppercase bg-slate-50 sticky top-0">
                  <tr>
                    <th className="px-6 py-3">Due Date</th>
                    <th className="px-6 py-3 text-right">Amount (EGP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PROPERTY_DATA.installmentSchedule.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-3 font-medium text-slate-900">{item.date}</td>
                      <td className="px-6 py-3 text-right font-mono">{formatCurrency(item.amount)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50 font-bold text-slate-900 sticky bottom-0">
                   <tr>
                    <td className="px-6 py-3">Total Remaining</td>
                    <td className="px-6 py-3 text-right">{formatCurrency(PROPERTY_DATA.price.remaining)}</td>
                   </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Maintenance Table */}
           <div className="bg-amber-50/50 border border-amber-100 rounded-2xl overflow-hidden shadow-sm h-fit">
            <div className="bg-amber-100/50 px-6 py-4 border-b border-amber-200 flex items-center">
               <Banknote className="w-5 h-5 text-amber-600 mr-2" />
               <h3 className="font-bold text-slate-800">Maintenance Deposits</h3>
            </div>
             <div className="p-0">
               <table className="w-full text-sm text-left text-slate-600">
                 <tbody className="divide-y divide-amber-100">
                  {PROPERTY_DATA.maintenanceSchedule.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">{item.date}</div>
                        <div className="text-xs text-amber-700">{item.label}</div>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-slate-900">
                        {formatCurrency(item.amount)}
                      </td>
                    </tr>
                  ))}
                 </tbody>
                  <tfoot className="bg-amber-100/30 font-bold text-slate-900">
                   <tr>
                    <td className="px-6 py-3 text-xs uppercase">Total</td>
                    <td className="px-6 py-3 text-right">{formatCurrency(PROPERTY_DATA.price.maintenance)}</td>
                   </tr>
                </tfoot>
               </table>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Financials;