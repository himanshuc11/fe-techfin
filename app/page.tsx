import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">TechFin</h1>
          <p className="text-slate-600">Your trusted financial partner</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
