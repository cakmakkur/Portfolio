import { useState, useRef, useEffect } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";
import checkLogo from "../Assets/checkLogo-green.svg"
import github__logo from "../Assets/github-hp.png"
import linked__in__logo from "../Assets/linkedin.svg"

export default function ContactPage () {
  const {language} = useLanguageContext();
  const sendMessageRef = useRef<HTMLDivElement>(null)
  const namePhRef = useRef<HTMLSpanElement>(null)
  const emailPhRef = useRef<HTMLSpanElement>(null)
  const subjectPhRef = useRef<HTMLSpanElement>(null)
  const messagePhRef = useRef<HTMLSpanElement>(null)
  const [isHovering, setIsHovering] = useState('')
  const [focus, setFocus] = useState('')
  const [messageSent, setMessageSent] = useState<boolean>(false)
  const [failed, setFailed] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // INPUT FX
  useEffect(() => {
    console.log(formData)
    namePhRef.current?.classList.remove('form__ph__text--active')
    emailPhRef.current?.classList.remove('form__ph__text--active')
    subjectPhRef.current?.classList.remove('form__ph__text--active')
    messagePhRef.current?.classList.remove('form__ph__text--active')

    if (focus === 'name' || formData.name !== '') {
      namePhRef.current?.classList.add('form__ph__text--active')
    }
    if (focus === 'email' || formData.email !== '') {
      emailPhRef.current?.classList.add('form__ph__text--active')
    }
    if (focus === 'subject' || formData.subject !== '') {
      subjectPhRef.current?.classList.add('form__ph__text--active')
    }
    if (focus === 'message' || formData.message !== '') {
      messagePhRef.current?.classList.add('form__ph__text--active')
    }

  }, [focus, formData])


  // CONTACT FX 
  useEffect(() => {
    sendMessageRef.current?.classList.remove('button__wrapper--active')
    if (isHovering === 'viewProduct') {
      sendMessageRef.current?.classList.add('button__wrapper--active')
    }
  }, [isHovering])

  function toggleFxBtn (arg: string) {
    setIsHovering(arg)
  }

  //REQUEST FORM
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/myyrvvjj", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setMessageSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setFailed(true)
    }
  };

  return (
    <div className="contact__page__main">
      {!messageSent
        ? (
          <form className="contact__form__div" onSubmit={handleSubmit}>
          <h1>{language === "EN" ? "GET IN TOUCH" : "KONTAKTIEREN"}</h1>
          <label className="contact__label">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocus('name')}
              onBlur={() => setFocus('')}
              required
            />
            <span ref={namePhRef} className="form__ph__text">Name</span>
          </label>
          <label className="contact__label">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocus('email')}
              onBlur={() => setFocus('')}
              required
            />
            <span ref={emailPhRef} className="form__ph__text">E-Mail</span>
          </label>
          <label className="contact__label">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocus('subject')}
              onBlur={() => setFocus('')}
              required
            />
            <span ref={subjectPhRef} className="form__ph__text">{language === 'EN' ? 'Subject' : 'Betreff'}</span>
          </label>
          <label className="contact__label">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocus('message')}
              onBlur={() => setFocus('')}
              required
            />
            <span ref={messagePhRef} className="form__ph__text">{language === 'EN' ? 'Message' : 'Nachricht'}</span>
          </label>
          {failed
            ? <h6>{language === "EN" 
              ? "❌ Failed to send the message. Please try again later." 
              : "❌ Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen." 
              }</h6> : ''
          }
          <div className="view__product__btn__div">
            <div ref={sendMessageRef} onMouseEnter={() => {toggleFxBtn('viewProduct')}} onMouseLeave={() => {toggleFxBtn('')}} className="button__wrapper pr__button__wrapper">
              <button style={{paddingTop: "0px"}} className="view__product__btn">{language === 'EN' ? 'CONTACT ME' : 'ABSENDEN'}
              </button>
            </div>
          </div>
      </form>
        )
        : (
          <div className="sentSuccessfully">
            <h3><img src={checkLogo} alt="" /> Message Sent Successfully</h3>
            <div className="view__product__btn__div">
              <div ref={sendMessageRef} onMouseEnter={() => {toggleFxBtn('viewProduct')}} onMouseLeave={() => {toggleFxBtn('')}} className="button__wrapper pr__button__wrapper">
                <button onClick={() => setMessageSent(false)} style={{paddingTop: "0px"}} className="view__product__btn">{language === 'EN' ? 'SEND ANOTHER MESSAGE' : 'NEUE NACHRICHT ABSENDEN'}
                </button>
              </div>
            </div>
          </div>
        )
      }
      <div className="contact__info__div">
        <h2>Kürsat Cakmak</h2>
        <h4>0681 10590944</h4>
        <h4>info@cakmakkursat.com</h4>
        <div className="ext__links__div ext__links__div--contact">
          <a href="https://github.com/cakmakkur"><img height={30} src={github__logo} alt="" /></a>
          <a href="https://www.linkedin.com/in/kursat-cakmak/"><img height={30} src={linked__in__logo} alt="" /></a>
        </div>
      </div>
    </div>
  )
}