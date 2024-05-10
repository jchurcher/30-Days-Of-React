// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import bbycakes from './images/bbycakes.jpg'
import scream from './customModule'
import frontEndIMG from './images/frontend_technologies.png'

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'
const role = 'Senior Developer, Funland'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const user = (
  <div>
    <img src={bbycakes} alt='my crazy bbycakes' />
  </div>
)

const myScream = scream(20);

const message = (
  <h1>
    {myScream}
  </h1>
)

const frontEnd = (
  <div>
    <img src={frontEndIMG} alt='frontend tech used' />
  </div>
)

// app for Level 2 exercise 2
// JSX elements, Subscription to news letter
const text = (
  <div className='text-wrapper'>
    <h1>Subscribe</h1>
    <p>Sign up with your email address to recieve news and updates.</p>
  </div>
);

const form = (
  <div className='form-wrapper'>
    <input type="text" placeholder='First name'></input>
    <input type="text" placeholder='Last name'></input>
    <input type="text" placeholder='Email'></input>
    <br></br>
    <button>Subscribe</button>
  </div>
);

const subscribe = (
  <div className='subscribe-wrapper'>
     {text}
     {form}
  </div>
);

// app for Level 3
const profile = (
  <div className='profile-wrapper'>
    <div className='profile-photo'>
      <img src={bbycakes} alt='my crazy bbycakes' />
    </div>
    <h2>{author.firstName} {author.lastName}</h2>
    <p>{role}</p>
  </div>
)

const skillsArr = [
  "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", 
  "MongoDB", "Python", "Flask", "Django", "NumPy", 
  "Pandas", "Data Analysis", "MYSQL", "GraphQL", "Gatsby", 
  "Docker", "Heroku", "Git"];

const skills = (
  <div className='skills-wrapper'>
    <h2>Skills:</h2>
    {skillsArr.map((skill) => 
      <span className='skill' key={skill}>
        {skill}
      </span>
    )}
  </div>
);

const joined = (
  <div className='joined-wrapper'>
    <p>Joined on {date}</p>
  </div>
)

const userCard = (
  <div className='user-card-wrapper'>
    <div className='user-card'>
      {profile}
      {skills}
      {joined}
    </div>
  </div>
);

//Main

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
      {message}
      {frontEnd}
      {subscribe}
      {userCard}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)