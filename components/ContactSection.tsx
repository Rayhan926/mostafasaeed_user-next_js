import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

function ContactSection() {
    return (
        <>
            {/* Contact Section Start */}
            <section className='bg-primary-900 py-[70px]'>
                <div className='container'>
                    <div className='md:w-fit mx-auto'>
                        <h3 className='section_title'>WORK WITH US</h3>
                        <div className='w-full mt-14 space-y-6'>
                            <Input name='name' label='Name' placeholder='Your Name' />
                            <Input name='twitter' label='Twitter' placeholder='@youraccount' />
                            <Input name='email' label='Email' placeholder='emwhale@email.com' />
                            <Textarea
                                placeholder='Let’s talk!'
                                label='Message'
                                name='message'
                                rows={5}
                            />
                            <Button>Submit</Button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section End */}
        </>
    );
}

export default ContactSection;
