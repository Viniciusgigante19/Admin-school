// /app/dashboard/student/layout.tsx
import StudentSidebar from "../student/components/Layout/StudentSidebar";

const user = {
  name: "Ana Souza",
  role: "Student",
  avatar: "https://i.pravatar.cc/150?img=15",
};

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <StudentSidebar user={user} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
