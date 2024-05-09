import supertest from "supertest";
import app from '../index'

export default supertest(app.callback())