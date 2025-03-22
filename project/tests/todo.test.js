import {test, expect} from '@playwright/test';
import path from 'path';

const pageUrl = 'file://' + path.resolve(__dirname, '../project/index.html');

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
    await page.click('addBtn');

    const tasks = page.locator('#todolist li');
    expect(tasks).toHaveCount(1);
    expect(tasks.first()).toHaveText('Пойти в зал');
});