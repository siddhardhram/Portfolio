import Contact from '../components/Contact';
import { EmailGate } from '../components/EmailGate';

const ContactPage = () => {
    return (
        <div className="min-h-screen pt-20">
            <EmailGate />
            <Contact />
        </div>
    );
};

export default ContactPage;
