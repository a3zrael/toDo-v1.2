# Используем официальный образ .NET для сборки приложения
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем файлы проектов и восстанавливаем зависимости
COPY ["PL/ToDoWebAPI/ToDoWebAPI.csproj", "PL/ToDoWebAPI/"]
COPY ["BLL/ToDoApplication/ToDoApplication.csproj", "BLL/ToDoApplication/"]
COPY ["BLL/ToDoDTOs/ToDoDTOs.csproj", "BLL/ToDoDTOs/"]
COPY ["BLL/ToDoInterfaces/ToDoInterfaces.csproj", "BLL/ToDoInterfaces/"]
COPY ["DAL/ToDoInterfacesDAL/ToDoInterfacesDAL.csproj", "DAL/ToDoInterfacesDAL/"]
COPY ["DAL/ToDoPersistence/ToDoPersistence.csproj", "DAL/ToDoPersistence/"]
COPY ["Core/ToDoDomain/ToDoDomain.csproj", "Core/ToDoDomain/"]

RUN dotnet restore "PL/ToDoWebAPI/ToDoWebAPI.csproj"

# Копируем остальные файлы и компилируем проект
COPY . .
WORKDIR "/src/PL/ToDoWebAPI"
RUN dotnet build "ToDoWebAPI.csproj" -c Release -o /app/build

# Публикуем проект
FROM build AS publish
RUN dotnet publish "ToDoWebAPI.csproj" -c Release -o /app/publish

# Запускаем приложение
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ToDoWebAPI.dll"]


