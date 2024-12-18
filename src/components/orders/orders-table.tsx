import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";
import { Order, TimeFilter } from "@/lib/types";

interface OrdersTableProps {
  orders: Order[];
  timeFilter: string;
  onTimeFilterChange: (value: TimeFilter) => void;
}

export function OrdersTable({ orders: initialOrders }: OrdersTableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Order;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const sortedOrders = [...initialOrders].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedOrders = sortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

  const handleSort = (key: keyof Order) => {
    setSortConfig((current) => {
      const isSameKey = current && current.key === key;
      const newDirection: "asc" | "desc" =
        isSameKey && current.direction === "asc" ? "desc" : "asc";
      return { key, direction: newDirection };
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap">
        <h2 className="text-3xl font-semibold flex-1">Orders</h2>
        <div className="flex items-center gap-4">
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => {
              setItemsPerPage(Number(value));
              setCurrentPage(1);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Rows per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 rows per page</SelectItem>
              <SelectItem value="10">10 rows per page</SelectItem>
              <SelectItem value="20">20 rows per page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Product</TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("date")}>
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("timeSpent")}>
                  Time spent
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("orderValue")}
                >
                  Order Value
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("commission")}
                >
                  Commission
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={order.productImage}
                      alt={order.productName}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="font-medium">{order.productName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{order.date}</span>
                    <span className="text-sm text-muted-foreground">
                      {order.timeSpent}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{order.timeSpent}</TableCell>
                <TableCell>${order.orderValue.toFixed(2)}</TableCell>
                <TableCell className="font-semibold">
                  ${order.commission}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" className="text-muted-foreground">
                    View Chat
                    <img src="/Orders/arrowUpRight.png" className="h-5 w-5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
