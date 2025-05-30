import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import useFetchUsers from "@/hooks/useFetchUsers";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ShieldCheck, Ban, User, Mail } from "lucide-react";

const AdminUsersPage = () => {
  const { users, loading } = useFetchUsers();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleBanToggle = (userId: string, isBanned: boolean) => {
    console.log(isBanned ? "Unbanning user:" : "Banning user:", userId);
    console.log(selectedUserId);
    setSelectedUserId(null);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-slate-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
        <User className="text-blue-600" /> Manage Users
      </h1>

      <div className="overflow-x-auto rounded-lg border shadow-sm">
        <Table className="min-w-full bg-white">
          <TableHeader className="bg-slate-100">
            <TableRow>
              <TableHead>🧑 Avatar</TableHead>
              <TableHead>👤 Username</TableHead>
              <TableHead>📧 Email</TableHead>
              <TableHead>🔑 Role</TableHead>
              <TableHead>🚫 Status</TableHead>
              <TableHead>⚙️ Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-slate-50 transition-all"
              >
                <TableCell>
                  <Avatar>
                    <AvatarImage src={user.profileImage} />
                    <AvatarFallback>
                      {user.username?.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell className="text-muted-foreground flex items-center gap-1">
                  <Mail className="w-4 h-4 text-blue-500" /> {user.email}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  {user.isBanned ? (
                    <Badge variant="destructive">Banned</Badge>
                  ) : (
                    <Badge variant="default">Active</Badge>
                  )}
                </TableCell>
                <TableCell className="space-x-2">
                  <Button
                    size="sm"
                    variant={user.isBanned ? "outline" : "destructive"}
                    onClick={() => handleBanToggle(user.id, user.isBanned)}
                  >
                    {user.isBanned ? (
                      <ShieldCheck className="w-4 h-4 mr-1" />
                    ) : (
                      <Ban className="w-4 h-4 mr-1" />
                    )}
                    {user.isBanned ? "Unban" : "Ban"}
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

export default AdminUsersPage;
