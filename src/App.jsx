import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  Quote,
  Trophy,
  UsersRound,
  X,
} from 'lucide-react'
import './App.css'

const slides = [
  {
    eyebrow: 'A place to grow, a place to belong',
    title: 'Curious minds. Kind hearts. Bright futures.',
    description:
      'A thoughtful education that gives every child the confidence to explore their world and the tools to shape what comes next.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=88',
    imageAlt: 'Students learning together in a bright classroom',
  },
  {
    eyebrow: 'Learning that lasts a lifetime',
    title: 'Room to discover who you can be.',
    description:
      'From a child’s first classroom to their final school year, we make space for curiosity, creativity and real achievement.',
    image:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1800&q=88',
    imageAlt: 'A teacher guiding students through a classroom lesson',
  },
  {
    eyebrow: 'Together, we go further',
    title: 'Big ambitions start with belonging.',
    description:
      'A close-knit school community where every student is known, encouraged and inspired to find their own way forward.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=88',
    imageAlt: 'Students sharing a joyful moment at school',
  },
]

const programs = [
  {
    range: 'PG – Prep',
    name: 'Montessori',
    description: 'A gentle, joyful start built around discovery, independence and play.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85',
    alt: 'Young students learning together',
    className: 'program-card--montessori',
  },
  {
    range: 'Class I – V',
    name: 'Junior Section',
    description: 'Strong foundations, new friendships and a world of ideas to explore.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85',
    alt: 'Student reading in a sunlit classroom',
    className: 'program-card--junior',
  },
  {
    range: 'Class VI – X',
    name: 'Senior Section',
    description: 'Growing confidence, deeper learning and room to find your strengths.',
    image:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85',
    alt: 'Students working on a classroom project',
    className: 'program-card--senior',
  },
  {
    range: 'Class XI – XII',
    name: 'College Section',
    description: 'Focused guidance and subject choices for the journey ahead.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85',
    alt: 'Graduating students celebrating together',
    className: 'program-card--college',
  },
]

const features = [
  {
    title: 'Affordable fees',
    copy: 'Thoughtful, quality education with fees designed to be accessible to families.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85',
    alt: 'Students learning together in a classroom',
  },
  {
    title: 'Qualified staff',
    copy: 'Dedicated, experienced teachers who bring out the best in every student.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=85',
    alt: 'A teacher leading a lesson in a classroom',
  },
  {
    title: 'Advanced IT lab',
    copy: 'Modern computers and hands-on learning build confidence with technology.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85',
    alt: 'Students learning and working with computers',
  },
  {
    title: 'Well-equipped science labs',
    copy: 'Practical experiments help students investigate, discover and understand.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=85',
    alt: 'Science equipment prepared for a laboratory experiment',
  },
  {
    title: 'A well-stocked library',
    copy: 'A welcoming collection of books gives every reader room to explore.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=85',
    alt: 'Rows of books in a welcoming school library',
  },
  {
    title: 'A large playground',
    copy: 'Open space for active play, fresh air, friendship and school sport.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=85',
    alt: 'A football on a green school sports field',
  },
  {
    title: 'Extra-curricular activities',
    copy: 'Sports, arts and clubs help students discover interests beyond class.',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=85',
    alt: 'Students taking part in a school performance',
  },
]

const schoolValues = ['Curiosity', 'Kindness', 'Confidence', 'Community', 'Integrity']

const campuses = [
  {
    name: 'Innovative Central Campus',
    address: '12 Garden Avenue, Gulberg, Lahore',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Innovative North Campus',
    address: '48 Maple Road, Model Town, Lahore',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85',
  },
]

const events = [
  {
    day: '18',
    month: 'NOV',
    type: 'School life',
    name: 'A Celebration of Young Talent',
    description: 'An afternoon of music, art and performances from our students.',
    image:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85',
  },
  {
    day: '24',
    month: 'NOV',
    type: 'Admissions',
    name: 'Open Morning at Innovative',
    description: 'Meet our teachers, tour the campus and see learning in action.',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=85',
  },
  {
    day: '02',
    month: 'DEC',
    type: 'Community',
    name: 'The Innovative Science Fair',
    description: 'Big questions, bright ideas and hands-on student projects.',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85',
  },
]

function SectionHeading({ eyebrow, title, copy, light = false, animateOnScroll = false, hasScrolled = false }) {
  const headingRef = useRef(null)
  const wasVisibleRef = useRef(false)
  const [isVisible, setIsVisible] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window),
  )
  const [entryCount, setEntryCount] = useState(0)

  useEffect(() => {
    if (!animateOnScroll || !hasScrolled) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === wasVisibleRef.current) return
      wasVisibleRef.current = entry.isIntersecting
      setIsVisible(entry.isIntersecting)
      if (entry.isIntersecting) setEntryCount((count) => count + 1)
    }, { threshold: 0.2 })

    if (headingRef.current) observer.observe(headingRef.current)

    return () => observer.disconnect()
  }, [animateOnScroll, hasScrolled])

  return (
    <div
      className={`section-heading${light ? ' section-heading--light' : ''}${animateOnScroll ? ` programs-heading${hasScrolled ? ' programs-heading--armed' : ''}${isVisible ? ' is-visible' : ''}` : ''}`}
    >
      <span ref={animateOnScroll ? headingRef : undefined} className="eyebrow">{eyebrow}</span>
      <h2>{animateOnScroll && hasScrolled && isVisible ? <TypewriterTitle key={entryCount} text={title} isVisible={isVisible} /> : title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function TypewriterTitle({ text, isVisible }) {
  const timerRef = useRef(null)
  const [typedText, setTypedText] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? text : ''
  ))
  const [isComplete, setIsComplete] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !isVisible) return undefined

    let characterIndex = 0
    const characters = Array.from(text)
    timerRef.current = window.setInterval(() => {
      characterIndex += 1
      setTypedText(characters.slice(0, characterIndex).join(''))

      if (characterIndex >= characters.length) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
        setIsComplete(true)
      }
    }, 42)

    return () => {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [isVisible, text])

  return (
    <span className="typewriter-title" role="text" aria-label={text}>
      <span aria-hidden="true">{isVisible ? typedText : ''}</span>
      {!isComplete && <span className="typewriter-caret" aria-hidden="true" />}
    </span>
  )
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [outgoingSlide, setOutgoingSlide] = useState(null)
  const [isImageFading, setIsImageFading] = useState(false)
  const [isSlideChanging, setIsSlideChanging] = useState(false)
  const previousSlideRef = useRef(activeSlide)
  const [activeFeaturePage, setActiveFeaturePage] = useState(0)
  const [featureDirection, setFeatureDirection] = useState('next')
  const [activeNav, setActiveNav] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const slide = slides[activeSlide]
  const featurePageCount = Math.ceil(features.length / 3)
  const visibleFeatures = features.slice(activeFeaturePage * 3, activeFeaturePage * 3 + 3)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHasLoaded(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (previousSlideRef.current === activeSlide) return undefined

    const previousSlide = previousSlideRef.current
    previousSlideRef.current = activeSlide
    setOutgoingSlide(previousSlide)
    setIsImageFading(false)
    setIsSlideChanging(true)

    const frame = window.requestAnimationFrame(() => setIsImageFading(true))
    const timer = window.setTimeout(() => {
      setOutgoingSlide(null)
      setIsImageFading(false)
      setIsSlideChanging(false)
    }, 2500)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [activeSlide])

  useEffect(() => {
    const sectionIds = ['home', 'about', 'academics', 'campuses', 'news', 'contact']

    const updateActiveNav = () => {
      const currentSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section) => section && section.getBoundingClientRect().top <= 120)
        .at(-1)

      setActiveNav(currentSection?.id ?? 'home')
    }

    updateActiveNav()
    window.addEventListener('scroll', updateActiveNav, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveNav)
  }, [])

  useEffect(() => {
    const activateScrollMotion = () => setHasScrolled(true)
    const onKeyDown = (event) => {
      if (['ArrowDown', 'PageDown', ' ', 'End'].includes(event.key)) activateScrollMotion()
    }

    window.addEventListener('wheel', activateScrollMotion, { passive: true, once: true })
    window.addEventListener('touchmove', activateScrollMotion, { passive: true, once: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', activateScrollMotion)
      window.removeEventListener('touchmove', activateScrollMotion)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (!('IntersectionObserver' in window)) return undefined

    const revealElements = document.querySelectorAll(
      '.intro-visual, .intro-photo-note, .intro-copy, .section-heading:not(.programs-heading), .program-card, .features-intro, .feature-item, .feature-controls, .vision-image, .vision-copy, .vision-item, .campus-card, .coaching-image, .coaching-content, .achievement-copy, .achievement-card, .event-card, .footer-grid > *',
    )
    const initiallyVisible = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    revealElements.forEach((element) => {
      element.classList.add('scroll-reveal')
      const bounds = element.getBoundingClientRect()
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        element.classList.add('is-visible', 'scroll-reveal--initial')
        initiallyVisible.push(element)
      } else {
        observer.observe(element)
      }
    })

    const frame = window.requestAnimationFrame(() => {
      initiallyVisible.forEach((element) => element.classList.remove('scroll-reveal--initial'))
    })

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div
      className={`site-shell${hasScrolled ? ' has-scrolled' : ''}${hasLoaded ? ' has-loaded' : ''}`}
      onClickCapture={(event) => {
        if (event.target instanceof Element && event.target.closest('a[href^="#"]:not([href="#home"])')) {
          setHasScrolled(true)
        }
      }}
    >
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Innovative School System home">
            <img className="brand-logo" src="/innovative-school-system-logo.png" alt="" />
            <span className="brand-copy">
              <strong>INNOVATIVE</strong>
              <small>SCHOOL SYSTEM</small>
            </span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
            <a className={activeNav === 'home' ? 'is-active' : ''} href="#home" aria-current={activeNav === 'home' ? 'page' : undefined} onClick={closeMenu}>Home</a>
            <a className={activeNav === 'about' ? 'is-active' : ''} href="#about" aria-current={activeNav === 'about' ? 'page' : undefined} onClick={closeMenu}>Our school</a>
            <a className={activeNav === 'academics' ? 'is-active' : ''} href="#academics" aria-current={activeNav === 'academics' ? 'page' : undefined} onClick={closeMenu}>Academics</a>
            <a className={activeNav === 'campuses' ? 'is-active' : ''} href="#campuses" aria-current={activeNav === 'campuses' ? 'page' : undefined} onClick={closeMenu}>Campuses</a>
            <a className={activeNav === 'news' ? 'is-active' : ''} href="#news" aria-current={activeNav === 'news' ? 'page' : undefined} onClick={closeMenu}>News & events</a>
            <a className={`nav-cta${activeNav === 'contact' ? ' is-active' : ''}`} href="#contact" aria-current={activeNav === 'contact' ? 'page' : undefined} onClick={closeMenu}>Admissions <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image">
            <img src={slide.image} alt={slide.imageAlt} fetchPriority="high" />
          </div>
          {outgoingSlide !== null && (
            <div className={`hero-image hero-image--outgoing${isImageFading ? ' is-fading' : ''}`} aria-hidden="true">
              <img src={slides[outgoingSlide].image} alt="" />
            </div>
          )}
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className={`hero-copy${isSlideChanging ? ' hero-copy--changing' : ''}`} key={activeSlide}>
              <span className="hero-eyebrow"><span /> {slide.eyebrow}</span>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="hero-actions">
                <a className="button button--gold" href="#academics">Discover Innovative <ArrowRight size={17} /></a>
                <a className="hero-text-link" href="#about">A note from our Principal <ArrowDown size={15} /></a>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="hero-pagination" aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}>
                {slides.map((item, index) => (
                  <button
                    type="button"
                    key={item.title}
                    className={index === activeSlide ? 'is-active' : ''}
                    aria-label={`Show slide ${index + 1}`}
                    aria-pressed={index === activeSlide}
                    onClick={() => {
                      setHasScrolled(true)
                      setActiveSlide(index)
                    }}
                  />
                ))}
              </div>
              <span className="hero-caption">01 <span /> A little more possible, every day</span>
            </div>
          </div>
        </section>

        <section className="values-marquee" aria-label="Innovative School System values">
          <p className="sr-only">Our values: {schoolValues.join(', ')}.</p>
          <div className="values-marquee-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div className="values-marquee-group" key={copy}>
                {schoolValues.map((value) => (
                  <span className="values-marquee-item" key={value}>
                    {value}<i />
                  </span>
                ))}
              </div>
            ))}
          </div>
          <span className="values-marquee-label" aria-hidden="true"><i /> Our values</span>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="container intro-grid">
            <div className="intro-visual">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                alt="Portrait of the Innovative School System principal"
                loading="lazy"
              />
              <span className="intro-stamp"><BookOpen size={20} /><span>A note from<br />our Principal</span></span>
              <div className="intro-photo-note">
                <span className="principal-initials">SA</span>
                <span className="principal-identity">
                  <strong>Dr. Sarah Ahmed</strong>
                  <small>Principal, Innovative School System</small>
                </span>
                <Check size={17} aria-label="School principal" />
              </div>
            </div>
            <div className="intro-copy">
              <span className="eyebrow">A school with heart</span>
              <h2>Every child deserves to feel <em>known, supported and full of possibility.</em></h2>
              <p className="intro-lead">At Innovative, a great education starts with a simple promise: every child matters, and every child has room to become.</p>
              <p>We bring families and dedicated teachers together to build confidence, nurture curiosity and help young people find their own strengths.</p>
              <div className="principal-quote">
                <Quote size={22} aria-hidden="true" />
                <blockquote>“A good school doesn’t just prepare children for the future. It helps them make the most of being children today.”</blockquote>
                <div className="principal-signoff">
                  <span className="signature-mark">Sarah Ahmed</span>
                  <span className="principal-credentials">Dr. Sarah Ahmed <small>Education & student development</small></span>
                </div>
              </div>
              <a className="underlined-link" href="#vision">The Innovative difference <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="programs-section section-pad" id="academics">
          <div className="container">
            <SectionHeading
              eyebrow="Learning at every age"
              title="A good beginning. A bright next step."
              copy="A connected journey from those first curious questions to confident plans for the future."
              animateOnScroll
              hasScrolled={hasScrolled}
            />
            <div className="program-grid">
              {programs.map((program, index) => (
                <article className={`program-card ${program.className}`} key={program.name}>
                  <a className="program-image" href="#contact" aria-label={`Explore ${program.name}`}>
                    <img src={program.image} alt={program.alt} loading="lazy" />
                    <span className="program-number">0{index + 1}</span>
                    <span className="program-arrow"><ArrowUpRight size={18} /></span>
                  </a>
                  <div className="program-info">
                    <span>{program.range}</span>
                    <h3>{program.name}</h3>
                    <p>{program.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section section-pad">
          <div className="container features-layout">
            <SectionHeading
              eyebrow="Salient features"
              title="A little more of what makes Innovative special."
              copy="The spaces, people and opportunities that help every student feel ready to learn."
              hasScrolled={hasScrolled}
            />
            <div
              className={`features-grid features-grid--${featureDirection}`}
              key={activeFeaturePage}
            >
              {visibleFeatures.map(({ title, copy, image, alt }, index) => (
                <article className="feature-item" key={title}>
                  <div className="feature-photo">
                    <img src={image} alt={alt} loading="lazy" />
                    <span className="feature-index">
                      0{activeFeaturePage * 3 + index + 1}
                    </span>
                  </div>
                  <div className="feature-content">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="feature-controls" aria-label="Salient features pages">
              <span className="feature-page-status" aria-live="polite">
                {String(activeFeaturePage + 1).padStart(2, '0')} / {String(featurePageCount).padStart(2, '0')}
              </span>
              <div className="feature-page-buttons">
                <button
                  type="button"
                  aria-label="Previous features"
                  disabled={activeFeaturePage === 0}
                  onClick={() => {
                    setFeatureDirection('previous')
                    setActiveFeaturePage((page) => page - 1)
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next features"
                  disabled={activeFeaturePage === featurePageCount - 1}
                  onClick={() => {
                    setFeatureDirection('next')
                    setActiveFeaturePage((page) => page + 1)
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="campus-section section-pad" id="campuses">
          <div className="container">
            <div className="section-row">
              <SectionHeading
                eyebrow="Come and say hello"
                title="A welcoming place, close to home."
                copy="Two neighbourhood campuses. One warm Innovative community."
                hasScrolled={hasScrolled}
              />
              <a className="underlined-link section-side-link" href="#contact">Get directions <ArrowRight size={16} /></a>
            </div>
            <div className="campus-grid">
              {campuses.map((campus, index) => (
                <article className="campus-card" key={campus.name}>
                  <div className="campus-photo">
                    <img src={campus.image} alt={`${campus.name} school building`} loading="lazy" />
                    <span className="campus-tag">{index === 0 ? 'Main campus' : 'North campus'}</span>
                  </div>
                  <div className="campus-details">
                    <div><span className="eyebrow">Lahore, Pakistan</span><h3>{campus.name}</h3><p><MapPin size={15} />{campus.address}</p></div>
                    <a href="#contact" aria-label={`Get directions to ${campus.name}`}><ArrowUpRight size={18} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vision-section section-pad" id="vision">
          <div className="container vision-grid">
            <div className="vision-image">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1100&q=85"
                alt="Students looking ahead together outside"
                loading="lazy"
              />
              <span className="vision-image-caption">Small steps. Big possibilities.</span>
            </div>
            <div className="vision-copy">
              <span className="eyebrow">What guides us</span>
              <h2>Rooted in kindness.<br /><em>Reaching for more.</em></h2>
              <div className="vision-item">
                <span className="vision-symbol">01</span>
                <div><h3>Our vision</h3><p>A future where every young person has the confidence, character and curiosity to make a positive difference.</p></div>
              </div>
              <div className="vision-item">
                <span className="vision-symbol">02</span>
                <div><h3>Our mission</h3><p>To make excellent, inclusive education personal — nurturing each student’s strengths while opening doors to new possibilities.</p></div>
              </div>
              <a className="underlined-link" href="#contact">Meet the Innovative community <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="coaching-section">
          <div className="coaching-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
              alt="Students studying after school"
              loading="lazy"
            />
          </div>
          <div className="coaching-content">
            <span className="eyebrow eyebrow--light">A little extra support</span>
            <h2>After the bell,<br />learning carries on.</h2>
            <p>Our Evening Coaching Academy offers a friendly, focused space to ask questions, build confidence and make steady progress.</p>
            <div className="coaching-details">
              <div><Clock3 size={17} /><span>Monday – Friday<br /><strong>3:30 pm – 6:00 pm</strong></span></div>
              <div><UsersRound size={17} /><span>For students<br /><strong>Classes VI – X</strong></span></div>
              <div><BookOpen size={17} /><span>Flexible monthly<br /><strong>fee options available</strong></span></div>
            </div>
            <a className="button button--gold" href="#contact">Ask about coaching <ArrowRight size={16} /></a>
            <span className="coaching-footnote">At our Innovative Central Campus</span>
          </div>
        </section>

        <section className="achievements-section section-pad">
          <div className="container achievement-layout">
            <div className="achievement-copy">
              <span className="eyebrow">The work behind the wins</span>
              <h2><span>Every achievement</span><br /><span>starts with a first try.</span></h2>
              <p>We’re proud of what our students accomplish — and even prouder of the care, effort and courage they bring along the way.</p>
              <a className="underlined-link" href="#news">See what’s happening <ArrowRight size={16} /></a>
            </div>
            <article className="achievement-card">
              <div className="achievement-photo">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1100&q=85"
                  alt="Students celebrating a school achievement"
                  loading="lazy"
                />
                <span className="achievement-ribbon"><Trophy size={17} /> A moment to remember</span>
              </div>
              <div className="achievement-details">
                <div className="achievement-trophy"><Trophy size={21} /></div>
                <div><span>Innovative North Campus · 2025</span><h3>Ali Raza</h3><p>First place, Lahore Schools Inter-Campus Science Fair</p></div>
                <span className="achievement-number">01 / 08</span>
              </div>
            </article>
          </div>
        </section>

        <section className="events-section section-pad" id="news">
          <div className="container">
            <div className="section-row">
              <SectionHeading
                eyebrow="Make a date of it"
                title="Good things on the calendar."
                copy="Open mornings, school celebrations and the little moments that bring us together."
                animateOnScroll
                hasScrolled={hasScrolled}
              />
              <a className="underlined-link section-side-link" href="#contact">All school news <ArrowRight size={16} /></a>
            </div>
            <div className="events-grid">
              {events.map((event) => (
                <article className="event-card" key={event.name}>
                  <a href="#contact" className="event-photo" aria-label={`Read more about ${event.name}`}>
                    <img src={event.image} alt="" loading="lazy" />
                    <span className="event-date"><strong>{event.day}</strong><small>{event.month}</small></span>
                    <span className="event-category">{event.type}</span>
                  </a>
                  <div className="event-copy"><h3>{event.name}</h3><p>{event.description}</p><a href="#contact" className="event-link">Find out more <ArrowRight size={15} /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="container footer-grid">
            <div className="footer-brand-block">
              <a className="brand brand--footer" href="#home" aria-label="Innovative School System home">
                <span className="brand-copy"><strong>INNOVATIVE</strong><small>SCHOOL SYSTEM</small></span>
              </a>
              <p>Inspiring young minds through thoughtful learning and opportunities to grow.</p>
              <a href="mailto:info@innovativeschoolsystem.edu.pk" className="footer-email">info@innovativeschoolsystem.edu.pk <ArrowUpRight size={14} /></a>
            </div>
            <div className="footer-column"><h3>Explore</h3><a href="#about">Our school</a><a href="#academics">Academics</a><a href="#campuses">Our campuses</a><a href="#news">News & events</a></div>
            <div className="footer-column"><h3>Get in touch</h3><a href="tel:+9242111222333">+92 42 111 222 333</a><a href="#campuses">12 Garden Avenue, Gulberg</a><a href="#campuses">Lahore, Pakistan</a><span>Mon – Fri, 8:00 am – 3:00 pm</span></div>
            <div className="footer-visit"><span className="eyebrow eyebrow--light">The next chapter starts here</span><h3>Come see what<br />Innovative feels like.</h3><a className="button button--gold" href="mailto:info@innovativeschoolsystem.edu.pk">Plan a visit <ArrowRight size={16} /></a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner"><span>© 2025 Innovative School System. All rights reserved.</span><span>Made for curious minds.</span><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </div>
  )
}

export default App
