from fastapi import FastAPI
from checkout.routes.billing import router as billing_router
from checkout.routes.webhook import router as webhook_router
from checkout.routes.verifyPayment import router as verify_payment_router
from fastapi.middleware.cors import CORSMiddleware
# from core.config import ORIGINS
from core.config import PAYSTACK_SECRET


app = FastAPI(title="Exclusive e_commerce API")
if not PAYSTACK_SECRET:
    raise ValueError("PAYSTACK_SECRET not available")
app.include_router(billing_router)
app.include_router(webhook_router)
app.include_router(verify_payment_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
print(PAYSTACK_SECRET[:10])

# print("CORS ORIGINS:", ORIGINS)

@app.get("/")
async def health_check():
    return {
        "status": "ok"
    }