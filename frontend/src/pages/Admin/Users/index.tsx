import { useState, useEffect } from "react";
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
import { ShieldCheck, Ban, User, Mail, ChevronDown } from "lucide-react";
import usersController from "@/services/api/users/usersApi";
import { toast } from "sonner";

const AdminUsers = () => {
  const { users: initialUsers, loading } = useFetchUsers();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (initialUsers) setUsers(initialUsers);
  }, [initialUsers]);

  const handleBanToggle = async (userId: string, isBanned: boolean) => {
    try {
      await usersController.updateUser(userId, { isBanned: !isBanned });
      toast.success(`User has been ${isBanned ? "unbanned" : "banned"}`);
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, isBanned: !isBanned } : user
        )
      );
    } catch (error) {
      console.error("Failed to update ban status", error);
      toast.error("Failed to update user status");
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await usersController.updateUser(userId, { role: newRole });
      toast.success(`Role changed to ${newRole}`);
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.error("Failed to change role", error);
      toast.error("Failed to change role");
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[#FF9A1E] flex items-center gap-3">
        <User className="text-[#FF9A1E] w-8 h-8" /> Admin - User Management
      </h1>

      <div className="overflow-x-auto rounded-lg border shadow-sm">
        <Table className="min-w-full bg-white">
          <TableHeader className="bg-[#FF9A1E]/10 text-[#FF9A1E]">
            <TableRow>
              <TableHead>🧑 Avatar</TableHead>
              <TableHead>👤 Username</TableHead>
              <TableHead>🧾 Name</TableHead>
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
                className="hover:bg-orange-50/30 transition-all"
              >
                <TableCell>
                  <Avatar>
                    <AvatarImage src={user.profileImage} />
                    <AvatarFallback>
                      {user.username?.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-semibold text-blue-600">
                  {user.username}
                </TableCell>
                <TableCell className="text-gray-700">
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell className="flex items-center gap-1 text-gray-600">
                  <Mail className="w-4 h-4 text-blue-500" /> {user.email}
                </TableCell>
                <TableCell>
                  <div className="relative inline-block">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                      className="appearance-none border px-3 py-1.5 pr-8 rounded-md text-sm capitalize shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <option value="client">Client</option>
                      <option value="host">Host</option>
                      <option value="admin">Admin</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-2 top-2.5 pointer-events-none text-gray-400" />
                  </div>
                </TableCell>
                <TableCell>
                  {user.isBanned ? (
                    <Badge variant="destructive">Banned</Badge>
                  ) : (
                    <Badge variant="default">Active</Badge>
                  )}
                </TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    size="sm"
                    variant={user.isBanned ? "outline" : "destructive"}
                    onClick={() => handleBanToggle(user.id, user.isBanned)}
                    className="cursor-pointer w-[100px]"
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

export default AdminUsers;
