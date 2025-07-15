import express from "express"
// import cors from "cors"
import path from "path"
import Service from "../service/root";

export default class Router{
    app = express();
    constructor(service: Service) {
        this.app = express();
        // this.app.use(cors());
        this.app.use(express.static("public"));
    }
    
    run(): void{
        this.app.get("/", (req, res) => {
            //res.setHeader('Access-Control-Allow-Origin', '*');
            res.sendFile(path.resolve("public/index.html"));
        });
          
          // 서버를 지정된 포트에서 시작하고, 성공 시 콘솔 메시지를 출력합니다.
        this.app.listen(3000, () => {
        console.log(`Server running at http://localhost:3000`);
        });
    }
}