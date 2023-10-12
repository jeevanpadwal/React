import './About.css';
function About() {
    return (
        <div id="about">
            <div id="about_photo">
                <img src="" alt="" style={{ width: '70%', marginLeft: '53px', marginTop: '5px', borderRadius: '22px' }} />
            </div>

            <div>
                <div id="about-content">
                    <h1 style={{ color: '#ee5329' }}>About me</h1>
                    <p style={{ fontSize: '19px', fontWeight: '300', color: 'white' }}>
                        Seeking a responsible position in an organisation, which gives me a chance to
                        improve knowledge, enhance my skills and enable me to strive towards the
                        overall development of the organisation.  <br />
                        <br />
                        Let's code a visionary future.
                    </p>
                </div>
                <div style={{ marginTop: '75px' }}>
                    <h1 style={{ color: '#ee5329' }}>Skills</h1>
                    <table style={{ width: '80%' }}>
                        <tr>
                            <td><img class="skill"
                                src="https://e7.pngegg.com/pngimages/724/306/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo.png"
                                alt="" /></td>
                            <td><img class="skill"
                                src="https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png"
                                alt="" /></td>
                            <td><img class="skill"
                                src="https://w7.pngwing.com/pngs/290/579/png-transparent-html-html-logo-html-5-html-five-logo-html-5-logo-programming-langugae-3d-icon-thumbnail.png"
                                alt="" /></td>
                            <td><img class="skill"
                                src="https://w7.pngwing.com/pngs/4/808/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon-thumbnail.png"
                                alt="" /></td>
                            <td><img class="skill"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHlF4l-4CD-0RfVBX8anGeK8-G3yINhjR7A&usqp=CAU"
                                alt="" /></td>

                        </tr>
                    </table>
                </div>
            </div>

        </div>
    );
}
export default About;