import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const TIERS = [
  {
    name: "Platinum",
    amount: 50000,
    benefits: ["Maximum visibility", "VIP access to events", "Recognition in all materials"],
  },
  {
    name: "Gold",
    amount: 45000,
    benefits: ["High visibility", "Priority access to events", "Recognition in major materials"],
  },
  {
    name: "Silver",
    amount: 35000,
    benefits: ["Enhanced visibility", "Event access", "Recognition in select materials"],
  },
  {
    name: "Bronze",
    amount: 25000,
    benefits: ["Standard visibility", "Event invitations", "Basic recognition"],
  },
];

interface SponsorshipTiersProps {
  selectedProject: string;
}

export function SponsorshipTiers({ selectedProject }: SponsorshipTiersProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    if (value !== "custom") {
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedOption("custom");
  };

  const handleSubmit = () => {
    let totalAmount = 0;
    let message = "";

    if (selectedOption === "custom") {
      totalAmount = Number.parseInt(customAmount) || 0;
      message = `Custom amount: $${totalAmount.toLocaleString()}`;
    } else {
      const selectedTier = TIERS.find((tier) => tier.name === selectedOption);
      if (selectedTier) {
        totalAmount = selectedTier.amount;
        message = `Selected tier: ${selectedTier.name} ($${totalAmount.toLocaleString()})`;
      }
    }

    alert(
      `${message}\nTotal donation: $${totalAmount.toLocaleString()} for ${
        selectedProject === "water" ? "Clean Drinking Water" : "Dikome Balue Hospital Rebuild"
      } project`
    );
  };

  return (
    <div className="space-y-6">
      <RadioGroup value={selectedOption} onValueChange={handleOptionChange}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <Card key={tier.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>${tier.amount.toLocaleString()}</CardTitle>
                <CardDescription className="text-xl font-bold">{tier.name}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={tier.name} id={`radio-${tier.name}`} />
                  <Label htmlFor={`radio-${tier.name}`}>Select {tier.name}</Label>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Custom Amount</CardTitle>
            <CardDescription>Enter a custom donation amount</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="radio-custom" />
              <Label htmlFor="radio-custom" className="text-2xl font-bold">
                $
              </Label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="text-2xl"
              />
            </div>
          </CardContent>
        </Card>
      </RadioGroup>

      <Button onClick={handleSubmit} className="w-full bg-green-600 p-8 hover:bg-green-300">
        Confirm Donation
      </Button>
    </div>
  );
}
