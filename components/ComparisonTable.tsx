import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Definimos qué es un "Software"
type Software = {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  affiliateLink: string;
  isRecommended: boolean;
};

export default function ComparisonTable({ data }: { data: Software[] }) {
  return (
    <div className="border rounded-xl shadow-xl bg-white overflow-hidden border-slate-100">
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead className="w-[200px] font-bold text-slate-700">Software</TableHead>
            <TableHead className="hidden md:table-cell text-slate-700">Ideal Para</TableHead>
            <TableHead className="text-slate-700">Valoración</TableHead>
            <TableHead className="text-right text-slate-700">Precio</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className={item.isRecommended ? "bg-emerald-50/30" : "hover:bg-slate-50"}>
              <TableCell className="font-medium">
                <div className="flex flex-col py-2">
                  <span className="text-lg font-bold text-slate-800">{item.name}</span>
                  {item.isRecommended && (
                    <span className="w-fit mt-2 inline-flex items-center gap-1 bg-yellow-400 text-black text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-lg shadow-yellow-400/20 animate-pulse">
                      🥇 Top Elección 2026
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-slate-500 text-sm leading-relaxed">
                {item.description}
              </TableCell>
              <TableCell>
                <div className="flex text-yellow-400 text-lg">
                  {"★".repeat(item.rating)}
                  <span className="text-slate-200">{"★".repeat(5 - item.rating)}</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-mono text-slate-600 font-medium">
                {item.price}
              </TableCell>
              <TableCell className="text-right">
                <a href={item.affiliateLink} target="_blank" rel="sponsored">
                  <Button size="default" className={`font-bold text-white shadow-md transition-all hover:scale-105 ${item.isRecommended ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200' : 'bg-slate-800 hover:bg-slate-900'}`}>
                    Ver Oferta
                  </Button>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}