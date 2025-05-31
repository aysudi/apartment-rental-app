import { useEffect, useState } from "react";
import { CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import contactController from "@/services/api/contacts/contactsApi";
import LoadingSpinner from "@/components/LoadingSpinner";
import { toast } from "sonner";

const AdminContacts = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await contactController.getAllContacts();
      setContacts(res);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const toggleReadStatus = async (id: string, current: boolean) => {
    try {
      const updated = await contactController.updateContact(id, {
        isRead: !current,
      });
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, isRead: updated.isRead } : c))
      );
      toast.success(`Marked as ${updated.isRead ? "read" : "unread"}`);
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-4xl font-bold text-[#1E3A8A] mb-8 text-center">
        📬 Admin Contact Messages
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-lg border border-blue-200 bg-white">
        <Table className="min-w-full">
          <TableHeader className="bg-blue-100 text-blue-700">
            <TableRow>
              <TableHead>👤 Full Name</TableHead>
              <TableHead>📧 Email</TableHead>
              <TableHead>📌 Subject</TableHead>
              <TableHead>📝 Message</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow
                key={contact.id}
                className={`hover:bg-blue-50 transition-all ${
                  contact.isRead ? "opacity-80" : "bg-yellow-50"
                }`}
              >
                <TableCell className="font-medium">
                  {contact.fullName}
                </TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.subject}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {contact.message}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${
                      contact.isRead
                        ? "border-green-600 text-green-600"
                        : "border-red-500 text-red-500"
                    }`}
                  >
                    {contact.isRead ? "Read" : "Unread"}
                  </Badge>
                </TableCell>
                <TableCell className="text-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleReadStatus(contact.id, contact.isRead)}
                    className="hover:text-blue-700 cursor-pointer"
                  >
                    {contact.isRead ? <Circle /> : <CheckCircle />}
                    <span className="ml-1">
                      Mark as {contact.isRead ? "Unread" : "Read"}
                    </span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminContacts;
