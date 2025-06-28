function calculate(x) {
    try {
        if (x === 1) throw "Ошибка: деление на ноль";
        
        
        const y = (x - 2) / (x - 1);
        return y.toFixed(2);
    } catch (error) {
        alert(error);
        return null;
    }
}