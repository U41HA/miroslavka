// const fs = require('fs');
import fs from 'fs'
import path from 'path'

const newbornFolderPath = './newborn'; // Замени на путь к желаемой папке
const outletFolderPath = './outlet'; // Замени на путь к желаемой папке

// Читаем файлы внутри папки
fs.readdir(newbornFolderPath, (err, files) => {
  if (err) {
    console.error('Ошибка чтения папки:', err);
    return;
  }

  // Создаем объект с названиями файлов
  const fileNames = files.map((file) => {
    // Получаем полный путь к файлу
    const filePath = path.join(`/${newbornFolderPath}`, file);

    // Возвращаем объект с названием файла без расширения
    return {
      id: file,
      name: file,
      path: filePath,
    };
  });

  // Конвертируем объект в JSON
  const jsonContent = JSON.stringify(fileNames, null, 2);

  // Создаем новый файл с названиями файлов в формате JSON
  const newFileName = 'newborn.json';
  const newFilePath = path.join('./api/json', newFileName);

  fs.writeFile(newFilePath, jsonContent, (err) => {
    if (err) {
      console.error('Ошибка создания файла:', err);
      return;
    }

    console.log(`Файл "${newFileName}" успешно создан.`);
  });
});
fs.readdir(outletFolderPath, (err, files) => {
  if (err) {
    console.error('Ошибка чтения папки:', err);
    return;
  }

  // Создаем объект с названиями файлов
  const fileNames = files.map((file) => {
    // Получаем полный путь к файлу
    const filePath = path.join(`/${outletFolderPath}`, file);

    // Возвращаем объект с названием файла без расширения
    return {
      id: file,
      name: file,
      path: filePath,
    };
  });

  // Конвертируем объект в JSON
  const jsonContent = JSON.stringify(fileNames, null, 2);

  // Создаем новый файл с названиями файлов в формате JSON
  const newFileName = 'outlet.json';
  const newFilePath = path.join('./api/json', newFileName);

  fs.writeFile(newFilePath, jsonContent, (err) => {
    if (err) {
      console.error('Ошибка создания файла:', err);
      return;
    }

    console.log(`Файл "${newFileName}" успешно создан.`);
  });
});
