from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend (React) to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, restrict to your frontend domain
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for flood reports
class FloodReport(BaseModel):
    id: int = None
    address: str
    severity: int
    description: str
    lat: float = None
    lng: float = None

# Temporary in-memory storage
reports: List[FloodReport] = []

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.post("/reports")
def create_report(report: FloodReport):
    report.id = len(reports) + 1
    reports.append(report)
    return report

@app.get("/reports")
def get_reports():
    return reports
