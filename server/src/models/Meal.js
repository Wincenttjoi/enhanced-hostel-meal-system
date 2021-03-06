module.exports = (sequelize, DataTypes) => {
    const Meal = sequelize.define('Meal', {
        Meal_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        mealComp1: {
            type: DataTypes.STRING
        },
        mealComp2: {
            type: DataTypes.STRING
        },
        mealComp3: {
            type: DataTypes.STRING
        },
        mealComp4: {
            type: DataTypes.STRING
        },
        mealComp5: {
            type: DataTypes.STRING
        },
        cuisineType: {
            type: DataTypes.STRING
        },
        breakfastOrDinner: {
            type: DataTypes.INTEGER
        }
    })
    return Meal
}