import { render, screen } from '@testing-library/react'
import { User } from '../../src/entities'
import UserAccount from '../../src/components/UserAccount';
describe("user account ", ()=>{
    it("sould render user name ")
    const user : User = {id: 1, name: "ahmed"};
    render(<UserAccount user={user}/>)
    expect(screen.getByText(user.name)).toBeInTheDocument()
})