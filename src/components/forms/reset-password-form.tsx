import { Input } from '@nextui-org/react'
import { SubmitButton } from '@/components/submit-button'
import { resetPasswordAction } from '@/lib/actions/auth'

export default function ResetPasswordForm() {
  return (
    <>
      <form className="flex flex-col gap-3">
        <Input
          isRequired
          label="Password"
          type="password"
          name="password"
          placeholder="New password"
          variant="bordered"
          required
        />
        <Input
          isRequired
          label="Confirm password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          variant="bordered"
          required
        />
        <SubmitButton color="primary" formAction={resetPasswordAction}>
          Reset password
        </SubmitButton>
      </form>
    </>
  )
}
