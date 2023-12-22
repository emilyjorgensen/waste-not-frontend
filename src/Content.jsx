import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { IngredientsIndex } from "./IngredientsIndex";

export function Content() {
  const ingredients = [
    {
      id: 1,
      name: "Eggs",
      image_url:
        "https://images.theconversation.com/files/372017/original/file-20201130-21-zuzh18.jpg?ixlib=rb-1.1.0&rect=44%2C8%2C5852%2C3925&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    },
    {
      id: 2,
      name: "Bell Peppers",
      image_url:
        "https://media.istockphoto.com/id/153564958/photo/colorful-peppers.jpg?s=612x612&w=0&k=20&c=7Ce6whyOFcnTQi74emPSwAdaXEcdMQI1JVNjfeTRP-Y=",
    },
    {
      id: 3,
      name: "Lentils",
      image_url: "https://www.shutterstock.com/image-photo/lentils-spoon-wooden-bowl-close-260nw-522209995.jpg",
    },
    {
      id: 4,
      name: "Feta Cheese",
      image_url:
        "https://media.istockphoto.com/id/608615220/photo/greek-feta-cheese-cubes-in-wooden-bowl-over-white.jpg?s=612x612&w=0&k=20&c=b0N3_OGu3wgSfT-hNQ-j-k642_OU2JF40O2YGpWuCvE=",
    },
    {
      id: 5,
      name: "Steak",
      image_url:
        "https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=",
    },
    {
      id: 6,
      name: "Wheat Bread",
      image_url:
        "https://media.istockphoto.com/id/157587362/photo/detailed-close-up-of-sliced-grain-bread-on-white-background.jpg?s=612x612&w=0&k=20&c=nr5f0Mb3Dx9RP_LmKKwlo6IlzDebfIdCbnERsnoSG94=",
    },
    {
      id: 7,
      name: "Pepperoni",
      image_url: "https://t4.ftcdn.net/jpg/01/84/28/67/360_F_184286756_q9Y3oFBVBotnWvtCxuVGE7XlaVuBHFAx.jpg",
    },
    {
      id: 8,
      name: "Mushrooms",
      image_url:
        "https://media.istockphoto.com/id/1276597176/photo/button-mushrooms.jpg?s=612x612&w=0&k=20&c=ilDpArGu1tDBzSAZR8zxr5VXjet7tb7U7Erx-vsRY4E=",
    },
    {
      id: 9,
      name: "Italian Dressing",
      image_url:
        "https://media.istockphoto.com/id/182818621/photo/salad-dressing.jpg?s=612x612&w=0&k=20&c=W2yhT9nFCWriibgRIPNcxw_FgHiFS9DG5XuW9K5AJvk=",
    },
    {
      id: 10,
      name: "Salt",
      image_url:
        "https://media.istockphoto.com/id/516450576/photo/traditional-glass-salt-cellar.jpg?s=612x612&w=0&k=20&c=H5gLaxswJnnEKRXDbusy-uRCiARroiM-lWRZHjVgV3Y=",
    },
  ];

  return (
    <main>
      <h1>Welcome to Waste Not: Kitchen!</h1>
      <Login />
      <LogoutLink />
      <Signup />
      <IngredientsIndex ingredients={ingredients} />
    </main>
  );
}
