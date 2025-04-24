from machine import Pin
import time

# Define GPIO pins
step_pin = Pin(16, Pin.OUT)
dir_pin = Pin(17, Pin.OUT)
enable_pin = Pin(18, Pin.OUT)  # Optional

# Enable the driver
enable_pin.value(0)  # Set to 0 to enable the driver, 1 to disable

# Set direction
dir_pin.value(0)  # Set to 0 for one direction, 1 for the opposite direction

# Function to step the motor
def step_motor(steps, delay):
    for _ in range(steps):
        step_pin.value(1)
        time.sleep(delay)
        step_pin.value(0)
        time.sleep(delay)

# Example usage
step_motor(200, 1)  # 200 steps with 1ms delay

# Disable the driver
enable_pin.value(1)  # Set to 1 to disable the driver (optional)
