import React from 'react';
import Footer from './footer'
import './about.css'

class About extends React.Component
{
    render(){
        return (
            <div>
                    <div className="about">
                        <div>
                            <h2 className="aboutITF">About ITF</h2>
                            <p className="doc">
                            Student Industrial Work Experience Scheme (SIWES) is a scheme that is recommended by all Nigerian Universities and also a skill training program which forms part of the approved academic standards of Universities in Nigeria. It was introduced in Nigeria in 1974 by the Federal Government of Nigeria. The scheme is under the cover of the Ministry of Education through the Industrial Training Fund (ITF).  This platform was made to help students have enough practical experience that is related to what they are studying in their institutions.<br/><br/>
                            <div>
                            The scheme was established in 1973, which involves three parties (student, institution and the placement). Concerning the funding, the Industrial Training Fund (ITF), National Universities commission (NUC) and the Federal Government are responsible for that. Prior to when SIWES was formed, there was a concern among out industrialist that Nigerian graduates were not equipped enough for employment in Industries. Because of that, it was brought into conclusion that the theoretical education going on in universities was not enough to match the expectations of employers in the industry. It is because of this the scheme was put in place by the Fund. SIWES was introduced in 1973/1974 to help students have an experience in the practical aspect of their respective course and withstand the pressure of the industry after their graduation. ITF financed the scheme during the years it was established. As the money aspect was too difficult to withstand, ITF pulled out from the scheme in 1978. In 1979, the Federal Government gave the responsibility to both National Universities Commission and National Board for Technical Education (NBTE). Later, the Federal Government reverted the management and implementation of the scheme to ITF in July 1985 and the funding being the Federal Government responsibility.<br/><br/>
                            </div>
                            <div>
                            There was a growing concern for a period of time that SIWES should be abandoned and demolished in the year 2012 and questions about the importance of SIWES were raised. It was discovered that the roles of the supervising agents were not being carried out appropriately. Lots of graduates goes for the attachment just because of the fact that it is compulsory in school but not for the main purpose because of lack of motivation in their respective offices.
                            </div>
                            </p>
                        </div>
                    </div>
                <Footer/>
            </div>
        );

}

}

export default About;