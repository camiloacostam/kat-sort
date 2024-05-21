// NextUI Components
import { Card } from '@nextui-org/react'
// users feature component
import { RegisterUserForm } from '../features/user/'

export default function SignUp() {
  return (
    <span className="flex flex-col md:flex-row w-full h-screen justify-center align-top items-center gap-10 p-10">
      <Card className="p-8">
        <RegisterUserForm />
      </Card>
    </span>
  )
}
