import ResetPasswordForm from '@/components/forms/reset-password-form'

export default function ResetPassword() {
  return (
    <>
      <main className="h-full flex flex-col justify-center items-center">
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <p className="pb-2 text-xl font-medium">Reset password</p>
          <ResetPasswordForm />
        </div>
      </main>
    </>
  )
}
