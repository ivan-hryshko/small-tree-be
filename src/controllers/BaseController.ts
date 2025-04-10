export class BaseController {

  static async sayHello(req: any, res: any) {
    res.status(200).json({
      message: "Hello World"
    })
  }

}