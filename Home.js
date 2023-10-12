import './Home.css';

function Home() {
    return (

          <div id="home-main">
            <div id="home-title">
              <h1 id='name'>Hello I'm Jeevan.</h1>
              <h1 id="designation">Software Developer</h1><br /><br />
              <a href="" id="cv">Hire me</a><br /><br /><br /><br />
              <table>
                <tr>
                  <td><a href=""><img className='home-icon'
                    src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg?w=2000"
                    alt="" /></a></td>
                  <td><a href=""><img className='home-icon'
                    src='https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png'
                    alt="" /></a></td>
                  <td><a href=""><img className='home-icon'
                    src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000"
                    alt="" /></a></td>
                </tr>
              </table>

            </div>
            <div id="photo">
              <img src="./photo.jpg" alt=""/>
            </div>

          </div>

    );
  }

  export default Home;