const { Consumption } = require("../models/");
const { StudentMealPlan } = require("../models/");

module.exports = {
  async getConsumption(req, res) {
    try {
      const meals = await Consumption.count({
        attributes: ["createdAtHour"],
        group: "createdAtHour",
      });
      const consumptionArray = meals.map((c) => {return {x: c.createdAtHour, y: c.count}})
      res.send(consumptionArray);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the consumption records",
      });
    }
  },
  async submitConsumption(req, res) {
    try {
            // const test = await Consumption.count({
            //     where: {
            //         UserId: req.body.UserId,
            //         // createdAtDay: new Date().setHour(0,0,0,0),
            //         breakfastOrDinner: req.body.breakfastOrDinner,
            //     },
            // }).then(result => {
            //     console.log(result)
            //     if (result <= 3) {
            //     Consumption.create(req.body)}
            // })

            // const creditLeft = StudentMealPlan.findOne({
            //     where: {
            //         UserId: req.body.UserId
            //     }
            // }).then(response => response.extraCredit)
            // console.log("counter", counterForSesssion)
            // console.log(creditLeft)

            // if (counterForSesssion <= 30) {
            //     const update = await Consumption.create(req.body)
            //     res.send(update)
            // }
      const consumption = await Consumption.create(req.body);
      res.send(consumption);
    } catch {
      res.status(400).send({
        error: "Consumption cannot be submitted",
      });
    }
  },
  async getConsumptionPercentage(req, res) {
    try {
      const meals = await Consumption.count({
        attributes: ["dayTimingCategory"],
        group: "dayTimingCategory",
      });
      const consumedArray = meals.map((c) => {return {x: c.dayTimingCategory, y: c.count}})

      const registered = await StudentMealPlan.findAll();
      const wastedArray = meals.map((x) => {
        const wastedCount = registered.filter((element) => element[x.dayTimingCategory] == "1").length - x.count
        x = { x: x.dayTimingCategory, y: wastedCount < 0 ? 0 : wastedCount };
        return x;
      });
      // implementation of wastedArray temporary until studentMealPlan is normalized
      res.send([consumedArray, wastedArray])
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the consumption records",
      });
    }
  },
};