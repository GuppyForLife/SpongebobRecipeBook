import React from "react";
import HTMLFlipBook from "react-pageflip";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1 className="recipeTitle">{props.recipeName}</h1>
      <img src={props.image} />
      <h3 className="recipeInfo">{props.children}</h3>
      <p className="pageNumber">{props.number}</p>
    </div>
  );
});

const Book = () => {
  return (
    <div className="bookContainer">
      <HTMLFlipBook
      width={300}
      height={500}
      size={"stretch"}
      showCover={true}
    >
      <Page number="1" recipeName="Krabby Patty" image="recipePhotos/krabbyPatty.jpg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed odio dolorum numquam quos, incidunt necessitatibus obcaecati qui, dolor animi quod deserunt libero tempore hic molestiae quo perspiciatis temporibus iusto!
      </Page>
      <Page number="2" recipeName="Krabby Patty">
        Page text
      </Page>
      <Page number="3" recipeName="Krabby Patty">
        Page text
      </Page>
      <Page number="4" recipeName="Krabby Patty">
        Page text
      </Page>
      <Page number="5" recipeName="Krabby Patty">
        Page text
      </Page>
      <Page number="6" recipeName="Krabby Patty">
        Page text
      </Page>
      <Page number="7" recipeName="Krabby Patty">
        Page text
      </Page>
      <Page number="8" recipeName="Krabby Patty">
        Page text
      </Page>
    </HTMLFlipBook>
    </div>
  );
};

export default Book;
