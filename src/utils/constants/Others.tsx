import { OtherProps } from "utils/developerStory";
import blog1Img from '/public/images/other/blog1-logo.jpeg';

export const allOthers: { [key: string]: OtherProps } = {
    blog1: {
        fromDate: "Oct 18, 2021",
        toDate: "Oct 18, 2021",
        title: "Toggle Theme in ReactJs",
        type: "Medium Blog",
        imageURL: blog1Img,
        url: "https://nimishjn.medium.com/toggle-theme-in-reactjs-4095dd35c69d",
        description: `
![medium](https://miro.medium.com/max/720/1*pHyoYMDC4OURM7KmZy3qAQ.png)

This blog is a comprehensive guide to toggle between dark theme and light theme in ReactJs. 
Developers use several methods to toggle between dark mode and light mode. 
However, most of them make use of excess lines of code or have unnecessary complications. 
Having struggled with the same issue in my initial projects, I decided to write this article.
        `
    }
}