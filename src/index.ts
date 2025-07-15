import Config from "./config/config";
import Repository from "./repository/root";
import Service from "./service/root";
import Router from "./network/root";

const config = new Config();
const repository = new Repository();
const service = new Service(repository);
const router = new Router(service);

router.run();