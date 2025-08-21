import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { MagazineTableProps } from "@/utils/types";

export function MagazineTable({ items, titles, language }: MagazineTableProps) {
  return (
    <div className="p-6 sm:p-8 rounded-xl border border-orange-500 bg-transparent backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-black">
          <thead>
            <tr className="bg-orange-500/20 text-orange-500">
              <th className="p-4 font-semibold rounded-tl-xl">
                {titles.title[language]}
              </th>
              <th className="p-4 font-semibold">{titles.date[language]}</th>
              <th className="p-4 font-semibold rounded-tr-xl text-center">
                {titles.link[language]}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.pdf_url}
                className="border-b border-slate-300 last:border-b-0 hover:bg-orange-200 transition-colors"
              >
                <td className="p-4">{item.notification_name}</td>
                <td className="p-4 text-sm text-slate-700">
                  {item.notification_datetime_formatted}
                </td>
                <td className="p-4 text-center">
                  <a
                    href={item.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
