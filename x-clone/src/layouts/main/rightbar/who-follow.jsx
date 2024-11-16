import SidebarSection from "../../../components/sidebar-section";
import { whoFollowUsers } from "../../../mock";
import { useAccount } from '../../../store/auth/hooks'
import UserCard from "../../../components/user-card";
export default function WhoFollow() {
    const account = useAccount();
    return (
        <SidebarSection
            title="Kimi Takip Etmeli"
            more={`/connect_people?user_id=${account.id}`}>
            {
                whoFollowUsers.map(user => <UserCard user={user} key={user.id} />)
            }
        </SidebarSection>
    )
} 