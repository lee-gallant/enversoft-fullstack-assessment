# enversoft-fullstack-assessment
My submission for the EnverSoft assessment, including C# solutions for algorithm challenges, CSV processing with unit tests, and a 3-tier supplier management app using Web API and SQL Server.

## Run With Docker Compose

From the repo root:

```bash
docker compose up -d
```

This starts:
- SQL Server (`1433`)
- DB initializer (`SupplierDB`, `Suppliers`, seed data)
- Backend API (`http://localhost:5163`)
- Frontend app (`http://localhost:5173`)

Useful commands:

```bash
# View service logs
docker compose logs -f

# Stop everything
docker compose down

# Stop and remove database volume (fresh DB next run)
docker compose down -v
```
