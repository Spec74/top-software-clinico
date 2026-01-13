import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead className="w-[200px] font-bold">Software</TableHead>
            <TableHead className="hidden md:table-cell">Ideal Para</TableHead>
            <TableHead>Valoración</TableHead>
            <TableHead className="text-right">Precio</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className={item.isRecommended ? "bg-blue-50/50" : ""}>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span className="text-lg">{item.name}</span>
                  {item.isRecommended && (
                    <Badge className="w-fit mt-1 bg-blue-600 hover:bg-blue-700">Top Elección 2025</Badge>
                  )}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-slate-600">
                {item.description}
              </TableCell>
              <TableCell>
                <div className="flex text-yellow-500 text-lg">
                  {"★".repeat(item.rating)}
                  <span className="text-slate-200">{"★".repeat(5 - item.rating)}</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-mono text-slate-600">
                {item.price}
              </TableCell>
              <TableCell className="text-right">
                <a href={item.affiliateLink} target="_blank" rel="sponsored">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 font-bold text-white shadow-md transition-all hover:scale-105">
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