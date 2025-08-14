import React from 'react';

interface TableSectionProps {
  textColor?: string;
  data: string[][]; 
  rowHeaders?: string[]; 
  columnHeaders?: string[]; 
  fontFamily?: string;
  cellTextColor?: string;
  bgColor?: string;
  title?: string;
}

const TableSection: React.FC<TableSectionProps> = ({
  textColor = 'text-white',
  data,
  rowHeaders,
  columnHeaders = ['Spalte 1', 'Spalte 2'], // Standardwerte für die Spaltenbeschriftungen
  fontFamily = 'font-encode',
  cellTextColor = 'text-white',
  bgColor = 'bg-costumblack',
  title,
}) => {
  return (
    <section className={`py-8 px-4 sm:px-6 lg:px-8 ${bgColor} ${textColor}`}>
      <div className="mx-auto max-w-4xl">
        {title && (
          <h2 className={`text-3xl md:text-4xl mb-8 text-center ${textColor} ${fontFamily}`}>
            {title}
          </h2>
        )}
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              {rowHeaders && <th className="py-2 px-4"></th>}
              {columnHeaders.map((header, index) => (
                <th key={index} className="py-2 px-4 text-left font-bold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-700 last:border-b-0">
                {rowHeaders && (
                  <th className={`py-2 px-2 text-left font-bold ${fontFamily}  ${cellTextColor} ${bgColor}`}>
                    {rowHeaders[rowIndex]}
                  </th>
                )}
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`py-2 px-4 ${fontFamily} ${cellTextColor} ${bgColor}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;
