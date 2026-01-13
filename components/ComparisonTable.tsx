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
    <>
      {/* ==============================================
          VISTA MÓVIL (TARJETAS)
          Visible solo en pantallas pequeñas (block md:hidden)
         ============================================== */}
      <div className="block md:hidden space-y-6">
        {data.map((item) => (
          <div 
            key={item.id} 
            className={`relative bg-white rounded-xl p-5 shadow-lg border-2 ${
              item.isRecommended ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-slate-100'
            }`}
          >
            {/* Badge de Recomendado (Flotando arriba) */}
            {item.isRecommended && (
              <div className="absolute -top-3 left-4 bg-yellow-400 text-black text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1 animate-pulse">
                🥇 Top Elección 2026
              </div>
            )}

            {/* Cabecera de la tarjeta */}
            <div className="flex justify-between items-start mt-2 mb-3">
              <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
              <div className="flex text-yellow-400 text-sm">
                {"★".repeat(item.rating)}
                <span className="text-slate-200">{"★".repeat(5 - item.rating)}</span>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">
              {item.description}
            </p>

            {/* Precio y Botón (Parte inferior) */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 uppercase font-bold">Precio</span>
                    <span className="font-mono font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded">
                        {item.price}
                    </span>
                </div>
                
                {/* BOTÓN DE ACCIÓN (Ancho completo para dedos gordos) */}
                <a href={item.affiliateLink} target="_blank" rel="sponsored" className="w-full">
                  <Button 
                    className={`w-full font-bold text-white h-12 text-lg shadow-md transition-all active:scale-95 ${
                        item.isRecommended 
                        ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200' 
                        : 'bg-slate-800 hover:bg-slate-900'
                    }`}
                  >
                    Ver Oferta →
                  </Button>
                </a>
            </div>
          </div>
        ))}
      </div>

      {/* ==============================================
          VISTA ESCRITORIO (TABLA ORIGINAL)
          Visible solo en pantallas medianas en adelante (hidden md:block)
         ============================================== */}
      <div className="hidden md:block border rounded-xl shadow-xl bg-white overflow-hidden border-slate-100">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[200px] font-bold text-slate-700">Software</TableHead>
              <TableHead className="hidden lg:table-cell text-slate-700">Ideal Para</TableHead>
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
                      <span className="w-fit mt-2 inline-flex items-center gap-1 bg-yellow-400 text-black text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-lg shadow-yellow-400/20">
                        🥇 Top Elección 2026
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell text-slate-500 text-sm leading-relaxed max-w-xs">
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
    </>
  );
}