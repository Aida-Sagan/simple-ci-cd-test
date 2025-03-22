import {test, expect} from '@playwright/test';

const pageUrl = 'https://simple-ci-cd-test-iehx.vercel.app/';

console.log(pageUrl);

/**
 * 1. открыть страницу
 * 2. ввести любую задачу
 * 3. нажать кнопку 
 * 4. проверить отображается ли задача
 */
test("Проверяем добавление новой задачи в список", async ({page}) => {
    await page.goto(pageUrl);

    await page.fill('#todoInput', 'Пойти в зал');
    await page.click('#addBtn');

    const tasks = page.locator('#todolist li');
    await expect(tasks).toHaveCount(1);
    await expect(tasks.first()).toHaveText('Пойти в зал');
});