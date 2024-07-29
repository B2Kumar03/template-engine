import express from "express";
import path from "path";
import userRouter from "./routes/user.routes.js";
import projectRouter from "./routes/projectRouter.routes.js";
import personalDatilsRoutes from "./routes/personalDetails.routes.js";
import skills from "./routes/skills.routes.js"
import otpSender from "./routes/otpSender.controller.js"
import cors from "cors"
import aiRouter from "./routes/ai.routes.js";
import resumeRoute from "./routes/resumeUploader.routes.js";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use("/api/v1/users", userRouter);//ad
app.use("/api/v1/users",projectRouter)
app.use("/api/v1/users",personalDatilsRoutes)
app.use("/api/v1/users",skills)
app.use("/api/v1/users",otpSender)


app.use("/api/v1/users",aiRouter)
app.use("/api/v1/users",resumeRoute)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.get("/api/v1/users/sonu", (req, res) => {
    res.render("index",{
        title:"Bittu",
    project_data :[{
            demoLink: "http://walmartClone.com",
            githubLink: "https://github.com/walmart",
            projectTitle: "Walmart Clone",
            projectDescription: "This is a Walmart clone given project in Masai CW",
            projectImage: "https://avatars.githubusercontent.com/u/140134657?v=4",
            techstack: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"]
          },
          {
            demoLink: "http://walmartClone.com",
            githubLink: "https://github.com/walmart",
            projectTitle: "Walmart Clone",
            projectDescription: "This is a Walmart clone given project in Masai CW",
            projectImage: "http://res.cloudinary.com/dqxb5eram/image/upload/v1722180717/dnj09gets…",
            techstack: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"]
          },
          {
            demoLink: "http://walmartClone.com",
            githubLink: "https://github.com/walmart",
            projectTitle: "Walmart Clone",
            projectDescription: "This is a Walmart clone given project in Masai CW",
            projectImage: "http://res.cloudinary.com/dqxb5eram/image/upload/v1722180717/dnj09gets…",
            techstack: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"]
          },
          {
            demoLink: "http://walmartClone.com",
            githubLink: "https://github.com/walmart",
            projectTitle: "Walmart Clone",
            projectDescription: "This is a Walmart clone given project in Masai CW",
            projectImage: "http://res.cloudinary.com/dqxb5eram/image/upload/v1722180717/dnj09gets…",
            techstack: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"]
          },
          {
            demoLink: "http://walmartClone.com",
            githubLink: "https://github.com/walmart",
            projectTitle: "Walmart Clone",
            projectDescription: "This is a Walmart clone given project in Masai CW",
            projectImage: "http://res.cloudinary.com/dqxb5eram/image/upload/v1722180717/dnj09gets…",
            techstack: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"]
          }

        ],
        techstack : [
            { url: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", name: "Express" },
            { url: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg", name: "Babel" }
        ],
        githubdata:{
            "login": "B2Kumar03",
            "id": 140134657,
            "node_id": "U_kgDOCFpJAQ",
            "avatar_url": "https://avatars.githubusercontent.com/u/140134657?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/B2Kumar03",
            "html_url": "https://github.com/B2Kumar03",
            "followers_url": "https://api.github.com/users/B2Kumar03/followers",
            "following_url": "https://api.github.com/users/B2Kumar03/following{/other_user}",
            "gists_url": "https://api.github.com/users/B2Kumar03/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/B2Kumar03/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/B2Kumar03/subscriptions",
            "organizations_url": "https://api.github.com/users/B2Kumar03/orgs",
            "repos_url": "https://api.github.com/users/B2Kumar03/repos",
            "events_url": "https://api.github.com/users/B2Kumar03/events{/privacy}",
            "received_events_url": "https://api.github.com/users/B2Kumar03/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Bittu Kumar",
            "company": null,
            "blog": "",
            "location": "Patna,Bihar",
            "email": null,
            "hireable": null,
            "bio": "Diligent MERN Stack Developer with robust expertise in MongoDB, Express.js, React, and Node.js. Proficient in HTML, CSS, and JavaScript and advance DSA.",
            "twitter_username": null,
            "public_repos": 91,
            "public_gists": 0,
            "followers": 27,
            "following": 24,
            "created_at": "2023-07-21T03:19:58Z",
            "updated_at": "2024-07-18T11:34:59Z"
            }
    });
});



export default app;
