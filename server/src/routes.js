const AuthenticationController = require('./controllers/AuthenticationController')
const MealsController = require('./controllers/MealsController')
const FeedbackController = require('./controllers/FeedbackController')
const StudentMealPlanController = require('./controllers/StudentMealPlanController')
const UpdateCostController = require('./controllers/UpdateCostController')
const SemesterController = require('./controllers/SemesterController')
const PaymentController = require('./controllers/StudentPaymentController')
const ConsumptionController = require('./controllers/ConsumptionController')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.post('/findMatric',
        AuthenticationController.findMatric)

    app.get('/HomePage',
        MealsController.getMeals)

    app.post('/HomePage', 
        MealsController.addMeal)

    app.get('/Feedback',
        FeedbackController.getFeedbacks)

    app.post('/Feedback',
        FeedbackController.submitFeedback)
        
    app.post('/MealPlans',
        StudentMealPlanController.getStudentMealPlan)

    app.get('/MealPlans',
        StudentMealPlanController.getRegistered)

    app.post('/MealSelection',
        StudentMealPlanController.registerMealPlan)

    app.post('/consumption',
        ConsumptionController.submitConsumption)

    app.get('/consumption',
        ConsumptionController.getConsumption)

    app.get('/consumptionPercentage',
        ConsumptionController.getConsumptionPercentage)

    app.post('/admin',
        UpdateCostController.updateCost)

    app.get('/admin',
        UpdateCostController.getCosts)

    app.post('/admin/addSemester',
        SemesterController.addSemester)
    
    app.get('/admin/addSemester',
        SemesterController.getSemesters)

    app.post('/admin/getWeeks',
        SemesterController.getWeeks)

    app.get('/admin/getCurrentSem',
        SemesterController.getCurrentSem)

    app.post('/mealselection/payment',
        PaymentController.registerAmount)

    app.patch('/mealselection/payment',
        PaymentController.makePayment)

    app.get('/mealselection/payment',
        PaymentController.getPayment)
}