import ForgotPasswordForm from '@/components/forms/forgot-password-form'
import { Link, Spacer } from '@nextui-org/react'

export default function ForgotPassword() {
  return (
    <>
      <main className="h-full flex flex-col justify-center items-center">
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <p className="pb-2 text-xl font-medium">Forgot password</p>
          <ForgotPasswordForm />
        </div>
        <Spacer y={2} />
        <Link href="/sign-in" size="sm" isBlock>
          Go back to sign in
        </Link>
      </main>
    </>
  )
}
