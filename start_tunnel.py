from pyngrok import ngrok, conf
import time

# Open tunnel on port 8080 (where our website server is running)
tunnel = ngrok.connect(8080, "http")
public_url = tunnel.public_url

print("=" * 60)
print("  SWAMI SAMARTH BATTERY & SOLAR SYSTEM")
print("  Your Website Public Link:")
print()
print(f"  👉  {public_url}")
print()
print("  Open this link on ANY phone or device!")
print("  Link is active as long as this window is open.")
print("=" * 60)

# Keep running
try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("Tunnel closed.")
    ngrok.kill()
