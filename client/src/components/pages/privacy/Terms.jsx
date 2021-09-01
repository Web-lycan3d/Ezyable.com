/** @format */

import React, { useEffect, useState } from "react";
import NavHeader from "../../NavComponents/NavHeader";
import Footer from "../footer/Footer";
import { animateScroll as scroll } from "react-scroll";

const Privacy = () => {
  useEffect(() => {
    scroll.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      <div className="home-contents">
        <div className="home-padding">
          <div className="image-overlay">
            <img src="../images/imgo.png" alt="error" className="white-logo" />
          </div>
          <NavHeader state={true} />
          <div className="privacy-box">
            <h2>Terms of service</h2>
            <div className="privacy-contents">
              <h4>Please read the following terms and conditions carefully</h4>
              <p>
                If you wish to book a Professional service via our website
                www.ezyable.com, you must agree to the terms below as the
                exclusive basis which governs such booking and by default you
                agree to ezyable terms and conditions on the main account
                registration page while creating an account on www.ezyable.com .
                If you do not agree to any of the terms, do not book a Private
                Repair Professional/Technician via this website. If you are
                booking on behalf of someone else, by default you agree to
                ezyable’s Terms & Conditions and you are representing that you
                have their authorization to accept these terms and conditions on
                their behalf.
              </p>
              <h4>READ THESE USER TERMS CAREFULLY BEFORE USING OUR WEBSITE</h4>
              <h5>1. Genera T&C</h5>
              <p>Definitions</p>
              <p>
                You – acting as a customer, registering a new booking/case with
                the company. Company – The Company hereby referred to as ezyable
                Services Private Limited. Booking/Case – effected via the
                registration with the website for availing / booking of the
                technician / repair professional for availing the services.
                Bookings can be made for single services or split/multiple
                services. Agreed Time - The appointed date and time for your
                services to be provided and as mentioned in the registration
                form. PRO/Service Provider – PRO and Service Provider are
                interchangeable terms used for Technicians or Private Repair
                Professional registered with the Company to offer their services
                to the end customers.
              </p>
              <h5>2. Services</h5>
              <p>
                The Company provides technology based services for providing
                home solutions in Bangalore such as repairing / services of home
                products to you and you agree to obtain the services offered by
                third party technicians / Service Providers / Private Repair
                Professionals ("the Service Provider"). All the Services
                provided by the Company to you by means of your use of the
                registration on the website of the Company are hereinafter
                referred to as the "Service."
              </p>
              <p>
                b. The entire Booking request as may be directed by the customer
                shall be forward to the concerned repair professional/service
                provider by the Company. The Service Provider shall be provided
                on availability basis and the same shall be communicated to the
                customer through the company internal mechanism procedure,
                however, it is clarified that on availability of the Service
                Provider, the communication details of Service Provider &
                Customer shall be shared between both of them by the Company for
                the ease of both the parties to perform or exercise their rights
                & obligations.
              </p>
              <p>
                {" "}
                c. In case, the Service Provider accepts the booking request
                made by you with the Company, your information is sent to the
                Service provider including your name, contact number etc.
              </p>
              <p>
                d. Company shall endeavor reasonable efforts to bring you in
                contact with the Service Provider in order to render the
                required service subject to availability of the Service Provider
                in or around your location at the time of your booking request
                made to the Company.
              </p>
              <p>
                {" "}
                e. It is pertinent to mention here that, the Company itself does
                not own / regulate the Service providers and neither there exist
                any employer / employee relation between them. It is the Service
                Provider who shall render the required services to you as per
                the relevant information submitted with the company while
                registering with the company. The provision of the services to
                be rendered by the Service Provider to you is therefore subject
                to the agreement (to be) entered into between you and the
                Service Provider and the Company shall never be a party to such
                agreement, in any manner whatsoever. Acceptance of booking
                request by the Company and the Service Provider does not reach
                your service location or decide not to render services, in that
                case / event the Company shall not be held liable to you in any
                manner whatsoever and neither the Customer is under obligation
                to make any payment in lieu thereof.
              </p>
              <p>
                {" "}
                f. You hereby certify and confirm that the relevant information
                you provide to the Company while registering your request or
                creation of account is accurate and complete in all respects as
                may be demanded by the Company in the application form. The
                Company is entitled to an all-time verify the information that
                you have provided. The Company shall not be liable if you do not
                visit the appropriate web portal or dial-in the correct call
                center number. The Company reserves the right to discontinue or
                introduce any of the modes of booking Service Provider.
              </p>
              <p>
                {" "}
                g.You will treat Service provider introduced to you through us
                with respect and not to cause damage to them or engage in any
                unlawful, threatening, harassing, abusive behavior or activity
                whilst using their service;
              </p>
              <p>
                h. Before handing over the products to be repaired the customer
                shall be cautious and ensure themselves about the credibility of
                the Service Provider and any defect in Service or theft/ damage
                to the asset; spare parts; accessories; products shall not be
                compensated by the Company in any manner whatsoever and it is
                clarified that that Company shall not be liable in any manner
                whatsoever, if any such harm/damage/ loss is caused to the
                Service Provider due to any such transfer or products to the
                Service provider for Service.
              </p>
              <p>
                {" "}
                i. You should confirm & clarify from the service provider about
                the time involved and the spare parts required to render the
                service including the total/aggregate service charges involved
                therein except the minimum cost before initiation of the
                Service. In case the same is not discussed, it is implied that
                the customer is aware of the service charges and has consented
                to avail the services as may be informed or directed by the
                service provider.
              </p>
              <p>
                {" "}
                j. You will compensate and defend the company fully against any
                claims or legal proceedings brought against us by any other
                person as a result of your breach of these Terms.
              </p>
              <p>
                {" "}
                k. Please note that we are not responsible for the behavior,
                actions or inactions, accuracy, efficiency of Service Provider,
                quality of Service which you may use through us or otherwise.
                Any Contract for the provision of services is exclusively
                between you and the Service provider and not us in any manner
                whatsoever and we simply provide a platform to introduce Service
                provider and Customer seeking the said service.
              </p>
              <h5>3. Charges and Payment</h5>
              <p>
                You will make payment in full to the Service provider introduced
                to you through us for any services provided by such Service
                provider to you. You shall be required to pay the minimum
                charges & Repair charges along with the spare parts costs, if
                any installed or replaced / substituted in the products, to the
                Service Provider. The Service charges shall be updated when the
                order is confirmed via email, text or telephonic communication
                and it shall be your responsibility to remain informed about the
                prevailing minimum charges for the services. And you should
                confirm the same from the Service provider about the service
                charge for the repair of the products before initiation of the
                Service. You agree that you will pay for all services you avail
                from the Service Provider either by way of online payment or any
                other payment method introduced by the company. Any payment made
                is non-refundable. After the completion of the Service, we will
                facilitate for you to receive a copy of the acknowledgement from
                the Service Provider on your registered email account with the
                Company.
              </p>
              <h5>4. Indemnification</h5>
              <p>
                By accepting these User Terms, you agree that you shall defend,
                indemnify and hold the Company, its affiliates, its licensors,
                and each of their officers, directors, other users, employees,
                attorneys and agents harmless from and against any and all
                claims, costs, damages, losses, liabilities and expenses
                including attorneys' fees and costs arising out of or in
                connection with: a. your violation or breach of any term of
                these User Terms or any applicable law or regulation, whether or
                not referenced herein; b. your violation of any rights of any
                third party, including Service Providers arranged via the
                website, or c. your use or misuse of the Website.
              </p>
              <h5>5. Liability</h5>
              <p>
                1. The information, recommendations provided to you on or
                through the Website is for general information purposes only and
                does not constitute any advice. The Company will reasonably keep
                the Website and its contents correct and up to date but does not
                guarantee that the contents of the Website are free of errors,
                defects, malware and viruses or that the Website are correct, up
                to date and accurate in all means.
              </p>
              <p>
                2. The Company shall further not be liable for damages resulting
                from the use of or the inability to use electronic means of
                communication with the Website, including – but not limited to –
                damages resulting from failure or delay in delivery of
                electronic communications, interception or manipulation of
                electronic communications by third parties or by computer
                programs used for electronic communications and transmission of
                viruses.
              </p>
              <p>
                3. Without prejudice to the foregoing, and insofar as allowed
                under mandatory applicable law, the Company's aggregate
                liability shall in no event exceed an amount of INR 500.
              </p>
              <p>
                4. The quality of the services requested through the use of the
                Application or the Service is entirely the responsibility of the
                Service Provider who ultimately provides such services to you.
                The Company under no circumstance accepts liability in
                connection with and/or arising from the services provided by the
                Service Provider or any acts, action, behavior, conduct, and/or
                negligence on the part of the Service Provider. Any complaints
                about the services provided by the Service Provider should
                therefore be submitted to the Service Provider.
              </p>
              <h5>6. INTELLECTUAL PROPERTY RIGHTS Trademarks and Copyrights</h5>
              <p>
                1. The Company is the sole owner of all the rights to the web
                site or any other digital media and its contents mentioned on
                the website. The content means its design, layout, text, images,
                graphics, sounds, video, etc. the website or any other digital
                media content embody trade secrets and intellectual property
                rights protected under applicable laws. All titles, ownership
                and intellectual property rights in the website and its content
                shall remain with the Company, its affiliates, agents,
                authorized representatives as the case may be.
              </p>
              <p>
                2. All rights not otherwise claimed under this Terms and
                Conditions or by the Company are hereby reserved. The
                information contained in this web site is intended, solely to
                provide general information for the personal use of the reader,
                who accepts full responsibility for its use.
              </p>
              <p>
                3. All related icons and logos are trademarks or service marks
                or word marks of the Company in various jurisdictions and are
                protected under applicable copyrights, trademarks and other
                proprietary rights laws. The unauthorized copying, modification,
                use or publication of these marks is strictly prohibited.
              </p>
              <h5>7. Modification of the Service and User Terms</h5>
              <p>
                The Company reserves the right, at its sole discretion, to
                modify or replace any of these User Terms, or change, suspend,
                or discontinue the Application including without limitation, the
                availability of any feature, database, or content at any time by
                posting a notice on the Website or by sending you notice through
                the Service, Application or via email. The Company may also
                impose limits on certain features and services or restrict your
                access to parts or all of the Service without notice or
                liability.
              </p>
              <h5>8. Notice</h5>

              <p>
                The Company may give notice by means of a general notice on the
                Service or Application, or by electronic mail to your email
                address on record in the Company's account information, or by
                written communication sent by regular mail to your address on
                record in Company's account information.
              </p>
              <h5>9. Privacy and Cookie Notice</h5>
              <p>
                The Company collects and processes the personal data of the
                visitors/ registered customers of the Website and the
                promotional offers may be sent by the Company on a time to time
                basis unless the same is denied by them by informing to the
                Company.
              </p>
              <h5>10. Excusable Delays Force Majeure</h5>
              <p>
                Neither party hereto shall be responsible for delays or failures
                in performance resulting from acts beyond its reasonable control
                and without its fault or negligence. Such excusable delays or
                failures may be caused by, among other things, strikes,
                lock-out, riots, rebellions, accidental explosions, floods,
                storms, acts of God and similar occurrences.
              </p>
              <h5>11. Miscellaneous</h5>
              <p>
                1. In the event of any dispute or difference between the Parties
                in respect of this Agreement, the construction of any provision
                of this Agreement or the rights, duties or liabilities of the
                Parties hereto under this Agreement, the same shall be referred
                to arbitration by a sole arbitrator to be appointed by the
                Company and the arbitration shall be conducted in accordance
                with the provisions of Arbitration and Conciliation Act, 1996.
                The venue of arbitration shall be at Bangalore Karnataka. The
                arbitration proceedings shall be conducted in English. Any award
                made in such arbitration will be final and binding on the
                parties. The arbitrator shall have the authority to order
                specific performance of this agreement. Subject to the
                foregoing, the Courts at Bangalore, Karnataka only shall have
                exclusive jurisdiction.
              </p>
              <p>
                2. The Courts of Bangalore, Karnataka shall have the sole and
                exclusive jurisdiction in respect of any matters arising from
                the use of the services offered by the Company or the agreement
                or arrangement between the Service provider and the Customer.
                All claims and disputes arising under these Terms and Conditions
                should be notified to the Service Provider or Company within 30
                days from the service date after which no claim shall be
                entertained.
              </p>
            </div>
          </div>

          <Footer colorState={false} />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
