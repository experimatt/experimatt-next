import Nav from '../components/nav'

export default () => (
  <div>
    <Nav />
    <div className='w-full flex items-center justify-center p4'>
      <img
        src='matt-decuir.jpg'
        alt='Matt Decuir headshot'
        className='block h-64 w-64 rounded-image'
      />
    </div>
    <div className='w-full flex items-center justify-center'>
      <h1 className='block font-bold text-3xl'>Hi, I&#39;m Matt</h1>
    </div>

    <div className="App">
      <section id="header">
        <div className="menu-button">
          <button className="pt-large" icon="menu" />
        </div>
        <div className="hello flex-container">
          <button className="pt-dark pt-large" text="Learn more" href='#about' />
        </div>
      </section>

      <section id="about">
        <div className="flex-container">
          <h1>I&#39;m a software engineer, bicyclist, and pizza enthusiast</h1>
        </div>
      </section>

      <section id="specialties" className="dark">
        <div className="flex-container">
          <h1>My specialties include Software Development, Product Management, Data Analysis, and Community Building.</h1>
        </div>
      </section>
    </div>
  </div>
)
