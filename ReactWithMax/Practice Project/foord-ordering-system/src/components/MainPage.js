import React from "react";
import Card from "./UI/Card";
import "./MainPage.css";
import AvailableMeals from "./Meals/AvailableMeals";

const MainPage = () => {
  return (
    <div className="mainFile">
      <h1>About-Us</h1>
      <div className="heading">
        <h1>WELCOME TO FOOD MANIA</h1>
      </div>

      <div className="infoSection">
        <p>
          Since the inception of our restaurant we have had it in mind of
          creating an instrumental ambience that would be influence Indian
          architecture and awe-inspiring cultures. We cordially invite you to
          drop in to our restaurant and plunge in the palate full of Indian
          culinary which is all in readiness for you to get served.
        </p>

        <p>
          <strong>
            <em>
              <u>What our master chefs have to offer for you</u>
            </em>
          </strong>
          – If you are an avid aficionado of Indian delicacies, then it is time
          that you drop in here. Our chefs are eager beaver to serve some of the
          lip smacking meals, which is sure to make you have a gala time out
          here.
        </p>

        <p>
          The ingredients that are being used are traditional herbs and spices
          which will make you sniff the opulent aroma of Indian subcontinent. At
          the same time our cordial staffs will be there to ensure that you are
          having a serene time with your peers or family members.
        </p>

        <p>
          <strong>
            <em>
              <u>Our dishes are completely vegetarian</u>
            </em>
          </strong>
          – You would be proud to know that all our dishes are vegetarian,
          without a trace of animal content of any sort. So you can be rest
          assured of having some of the healthy foods, which would be absolutely
          superlative for your appetite. All our foods are being available for
          dining and some of them can be takeaway-ed.
        </p>

        <p>
          <strong>
            <em>
              <u>Are you in need of exotic desserts</u>
            </em>
          </strong>
          <strong>
            <em>
              <u>? Do drop in here</u>
            </em>
          </strong>
          – Apart from the mouth watering dishes, it is a privilege to announce
          that we do serve multitude of confectionary and snacks. You will also
          get array of exotic desserts for the special occasions. You can check
          out our range in the menu and sweets section.
        </p>

        <p>
          We are being located on Mt. Roskill and Papatoetoe and are available
          for functions and private venue hire. Book us today so that we could
          build up a positive bond of amity with all our clients.
        </p>
        <Card>
          <div className="heading">
            <h1>Menu</h1>
          </div>
          <div class="menu">
            <h2>
              <strong>
                <em>
                  <u>
                    Some of our Famous Dishes / Sweets / Snacks / chaat items
                  </u>
                </em>
              </strong>
            </h2>
          




          </div>
          <AvailableMeals />
          
        </Card>
      </div>
    </div>
  );
};

export default MainPage;
